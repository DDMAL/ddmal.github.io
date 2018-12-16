---
layout: page
title: Discrete Fourier Transform
tab: Resources
---

Implementation of the Discrete Fourier Transform in Python, for reference.

```
from numpy import *

def dft(x):
    """
    My implementation of the discrete fourier transform
    """
    N = shape(x)[1]
    print "x", shape(x)
    k = arange(0, N)
    k.shape = N, 1
    n = arange(0, N)
    W = zeros((N, N), complex)
    # don't forget to make it a complex number array!
    for n in range(N):
        for k in range(N):
            W[n,k] = exp(-1j * n * k * 2.0 * pi/N)

    X = asmatrix(x) * asmatrix(W)
    return X
```
