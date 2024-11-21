import re
from bs4 import BeautifulSoup

def standardize_card_layout(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find all cards that need to be updated
    cards = soup.find_all('div', class_=lambda x: x and 'card group/card' in x)
    
    for card in cards:
        # Skip cards that already have the correct layout
        if 'h-16' in card.find('img').get('class', []):
            continue
            
        # Update image container height
        img_container = card.find('div', class_='image-focus')
        if img_container:
            img = img_container.find('img')
            if img and 'h-32' in img.get('class', []):
                img['class'] = [c for c in img['class'] if c != 'h-32']
                img['class'].append('h-16')
        
        # Update card body padding and spacing
        card_body = card.find('div', class_='card-body')
        if card_body:
            if 'p-4' in card_body.get('class', []):
                card_body['class'] = [c for c in card_body['class'] if c != 'p-4']
                card_body['class'].extend(['p-2', 'space-y-1'])
            
            # Update text sizes
            for text_elem in card_body.find_all(['div', 'span']):
                if 'text-sm' in text_elem.get('class', []):
                    text_elem['class'] = [c for c in text_elem['class'] if c != 'text-sm']
                    text_elem['class'].append('text-[10px]')
                    
            # Update icon sizes
            for icon in card_body.find_all('i', class_=lambda x: x and 'fas' in x):
                icon['class'].extend(['text-[10px]', 'w-3'])
    
    return str(soup)

# Read the HTML file
with open('templates/index.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Update the card layouts
updated_html = standardize_card_layout(html_content)

# Write the updated HTML back to the file
with open('templates/index.html', 'w', encoding='utf-8') as file:
    file.write(updated_html) 