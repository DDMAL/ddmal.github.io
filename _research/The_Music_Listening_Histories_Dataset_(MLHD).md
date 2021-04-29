---
layout: page
title: The Music Listening Histories Dataset (MLHD)
tab: Research
type: project
redirect_from:
    - /research/musiclisteninghistoriesdataset
---

The Music Listening Histories Dataset (MLHD) is a large-scale collection of music listening events assembled from more than 27 billion time-stamped logs extracted from Last.fm.

Attractive features of the MLHD are:

* self-declared metadata provided by users at the moment of registration whose identities have been anonymized
* MusicBrainz identifiers (MBID) for the music entities in each of the logs that allows for an easy linkage to other existing resources
* a set of user profiling features designed to describe aspects of their music listening behavior and activity
* orders of magnitude bigger than other datasets of similar characteristics  
<br>

## Dataset Structure

The logs in the dataset are organized in the form of sanitized listening histories per user, where each user has one file, with one log per line.

Each log is a quadruple `<timestamp, artist-MBID, release-MBID, recording-MBID>`.

To allow easy computation in HPC parallel systems, the dataset is distributed as TAR files with about 1K user listening histories files each. The full dataset contains 576 files of about 1GB each. These files are subsequently bundled in sets of 32 TAR files in order to facilitate downloading. (Note: the file `MLHD_386.tar` does not have any actual listening history. It is part of the dataset just to add up to 576 files, thus facilitating the parallelization by using many combinations of factors)

Additionally, we also provide a set of text files with demographic information, as well as listening habits and behavioural data.  
<br>

## Download

The dataset can be downloaded using the [Globus system](https://www.globus.org/data-sharing){:target="_blank"} from the following endpoint hosted in Compute Canada:

[MLHD Dataset in Compute Canada Globus endpoint](https://app.globus.org/file-manager?origin_id=6e604070-3009-11eb-b16c-0ee0d5d9299f&origin_path=%2F){:target="_blank"}

A file with sha256 hashes per each of the 576 TAR files is provided to verify the integrity of the files. 
<br>

## Features for profiling and describing listeners in the Music Listening Histories Dataset

Accompanying the MLHD full data, we also provide a set of text files with additional data aiming at characterizing specific aspects of the listeners. The data contains self-declared demographic information about the listeners, a set of features for describing their listening activity, and a set of features for describing their listening behaviour. 

Each text file comes with a header indicating the column names. The delimiter character is a tab. In order to protect the listeners' identities, all references to their usernames and Last.fm IDs have been anonymized with UUIDs.

For example, the first three lines of the `MLHD_demographics.csv` file are:

```
uuid\t age\t country\t gender\t playcount\t age_scrobbles\t user_type\t registered\t firstscrobble\t lastscrobble

dfb7ea9d-6e4f-48e4-96f6-59abcc207d55\t 30\t AT\t n\t 42622\t 3783\t user\t 1035849600\t 1138630578\t 1362652343

a89cb9c5-ba84-424e-8950-16657bb6f7af\t 35\t US\t m\t 182118\t 3862\t subscrib\t 1035849600\t 1130274207\t 1369498564
```
<br>

## Demographic Features

The MLHD provides a set of features describing some of the listeners' demographic characteristics.

At the moment of registration, Last.fm asks the listeners to declare their year of birth, gender, and country. The listeners' age are updated automatically by the service, and gender and country can be updated at any time by them.

The `age` reported in the dataset is the age returned by the system at the moment of the data collection (i.e., circa 2013 and 2014). `gender` and `country` are the listeners' self-declared gender and country. Since they have the option to do not declare, in the dataset we assigned the value `NA` for non-declared country (and we changed the country code for Namibia to `NB`), and `n` for gender not declared.

The `playcounts` column returns the total number of logs within each listener's music listening history.

The `age_scrobbles` field is the number of days that passed between the first and the last logs recorded in the dataset.

The `user type` column returns the "user type" assigned by Last.fm to each user according to their involvement with the service: "subscrib" are those that paid a monthly installment to Last.fm for getting unlimited streaming tracks and no ads, "user" are people without any special privileges in the "freemium" pricing strategy; "staff", "moderator", and "alumni" are statuses for people that are currently working for Last.fm, or that worked previously for the service.

The `registered`, `firstscrobble`, and `lastscrobble` columns return Unix (UTC) timestamps for each listener's registration, first submitted log to Last.fm, and the last log stored in the MLHD.

The CSV file can be downloaded from the following link:

<http://bit.ly/MLHD-Demographics-20>  
<br>

## Listening Behavioural Features

To characterize listening behaviours, we provide in the MLHD a set of four computational features tailored to to represent some characteristics of music listening behaviours. The features are `exploratoryness`, `mainstreamness`, `genderedness`, and `fringeness`. Values for these features were computed for the three types of music items in the dataset: artists, albums, and tracks. Therefore, each listener’s listening profile is described by a vector of 12 continuous values. For details about each of these features formulations, please refer to Vigliensoni and Fujinaga (2016).

<http://bit.ly/MLHD-Behavioral-20>  
<br>

## User Activity Features

We computed from the music listening histories’ UTC timestamps a series of features that aggregated the number of logs of each listening history into several time spans. These low-dimensional representations of user activity are: `hourly activity per day`, `hourly activity by week hour`, `weekly activity`, `monthly activity`, and `yearly activity`. Values in each column represent the percentage of the total of listening logs per user for each span of time.

<http://bit.ly/MLHD-Activity-20>  
<br>

## Scientific References

For details about how the dataset was assembled and how the features were computed, do check the following scientific publications:

* Vigliensoni, Gabriel, and Ichiro Fujinaga. "The music listening histories dataset." In Proceedings of the 18th International Society for Music Information Retrieval Conference. Suzhou, People's Republic of China, 2017. [(pdf)](https://ismir2017.smcnus.org/wp-content/uploads/2017/10/180_Paper.pdf)
* Vigliensoni, Gabriel, and Ichiro Fujinaga. "Automatic music recommendation systems: Do demographic, profiling, and contextual features improve their performance?." In Proceedings of the 17th International Society for Music Information Retrieval Conference. New York City, NY, USA. 2016. [(pdf)](https://18798-presscdn-pagely.netdna-ssl.com/ismir2016/wp-content/uploads/sites/2294/2016/07/044_Paper.pdf)
* Vigliensoni, Gabriel, and Ichiro Fujinaga. "Identifying time zones in a large dataset of music listening logs." In Proceedings of the International Workshop on Social Media Retrieval and Analysis. Gold Coast, Australia, 2014. [(pdf)](http://delivery.acm.org/10.1145/2640000/2632203/p27-vigliensoni.pdf?ip=132.206.14.126&acc=ACTIVE%20SERVICE&key=FD0067F557510FFB.03D32F869B60D852.4D4702B0C3E38B35.4D4702B0C3E38B35&CFID=996440539&CFTOKEN=83382403&__acm__=1508367252_d4fb6dcdac2d0b79b90e74e0aa94254c%3Ftarget%3D_blank)

If you use the dataset, please do cite the following publication:

```
@inproceedings{vigliensoni17music,
    Author = {Vigliensoni, Gabriel and Fujinaga, Ichiro},
    Title = {The music listening histories dataset},
    Booktitle = {Proceedings of the 18th International Society for Music Information Retrieval Conference},
    Address = {Suzhou, People's Republic of China},
    Pages = {96--102},
    Year = {2017},
    Keywords = {Dataset, Listening behaviour, Music Preference, Last.fm},
}
```
<br>

## Acknowledgments

We are extremely grateful of all users of Last.fm that have agreed to make their data available for non-commercial use, and also to the Last.fm service, which has collected and offered this data since 2002 uninterruptedly, helping the field of music informatics research to move forward.

This research has been supported by BecasChile Bicentenario, [Comision Nacional de Investigacion Cientifica y Tecnologica](http://www.conicyt.cl/), Gobierno de Chile, and the [Social Sciences and Humanities Research Council of Canada](http://www.sshrc-crsh.gc.ca/). Important parts of this work used [ComputeCanada’s High Performance Computing](https://www.computecanada.ca/) resources.

For additional information, questions, problems, or feedback please contact Gabriel Vigliensoni at [gabriel.vigliensonimartin@mcgill.ca](mailto:gabriel.vigliensonimartin@mcgill.ca). In case of issues, please do include as much detail as possible.

![last.fm]({{ site.url }}/assets/Lastfm2008.png "Last.fm")
