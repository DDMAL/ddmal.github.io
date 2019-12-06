import PIL
from PIL import Image
import os

image_path = 'assets/lab_members/'
MAX_SIZE = (150, 150)

for filename in os.listdir(image_path):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        print(filename)
        image = Image.open(image_path + filename)
        image.thumbnail(MAX_SIZE)
        image.save(image_path + 'thumbnail/' + filename)

# thumbnail_image = image.thumbnail(MAX_SIZE)
#
# thumbnail_image.save(image_path + 'thumbnail/' + image_name)
