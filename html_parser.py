'''Emily Hopkins adapted to DDMAL needs from the parser Evan Savage 
wrote for the SIMSSA site'''
# Later adapted by Taz Scott-Talib to work with static website (July 2023)

from bs4 import BeautifulSoup
from urllib.parse import unquote
import json

print('Media (m,M), presentations (pr, PR), publications (pu, PU), posters (po, PO), OMR bibliography (o,O) or all (a,A)?\n')
choice = str(input()).lower()

input_list = ['m', 'pr', 'pu', 'po', 'o', 'a']
full_list = ['media', 'presentations', 'publications', 'posters', 'omr']
parse_list = []

if choice not in input_list:
    print('\nTry again, the input was not valid.\n\n')
    exit()
if choice == 'a':
    parse_list = full_list
else:
    parse_list = [full_list[input_list.index(choice)]]

ddmal_root_folder = './'
export_folder = 'zotero_export/'

for type in parse_list:

    html_file_name = f'DDMAL_{type}.html'
    path = f'activities/{type}/content.json' if type != 'omr' else f'research/omr/resources/OMRBibliography/content.json'

    # Dictionaries for each of the different sources. Keys are the years, values are the html contents.
    # These will be stored in JSON files in the corresponding folders.
    content = {}

    with open(export_folder + html_file_name, encoding='utf-8') as f:
        html_soup = BeautifulSoup(f, 'html.parser')


    html_array = []

    for html_tag in html_soup.findAll('div', {'class': 'csl-entry'}):
        parse_attr = html_tag.find_next('span')['title']
        year = 'n.d.'
        author = 'no_author'
        title = ')no_title'
        a_title = ')no_a_title'
        b_title = ')no_b_title'

        if 'rft.date' in parse_attr:
            year = parse_attr.split('rft.date=')[1].split('-')[0].split('&')[0]

        # might need later
        # if 'rft.aulast' in parse_attr:
        #     author = unquote(parse_attr.split('rft.aulast=')[1].split('&')[0])
        # if 'rft.title' in parse_attr:
        #     title = unquote(parse_attr.split('rft.title=')[1].split('&')[0])
        # if 'rft.atitle' in parse_attr:
        #     a_title = unquote(parse_attr.split('rft.atitle=')[1].split('&')[0])
        # if 'rft.btitle' in parse_attr:
        #     b_title = unquote(parse_attr.split('rft.btitle=')[1].split('&')[0])


        if year in content:
            content[year].append(html_tag.decode_contents())
        else:
            content[year] = [html_tag.decode_contents()]
    
    # sort by year, descending
    content = {y: content[y] for y in sorted(content, reverse=True)}

    # sort alphabetically in each year
    for y in content:
        content[y].sort()

    with open(path, 'w') as f:
        json.dump(content, f, indent=4)
