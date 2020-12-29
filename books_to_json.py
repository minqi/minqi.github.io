import csv
import json

if __name__ == '__main__':
	f = open('books.csv')
	reader = csv.DictReader(f)
	books = [r for r in reader]

	book_dicts = []
	for i, book in enumerate(reversed(books)):
		if i == 0:
			continue

		title = book['Title']
		author = book['Author']
		rating = book['Rating']
		pid = book['product_id']
		url = book['URL']
		private = book['Private']
		date_read = book['Date finished']

		if not private and (len(pid) > 0 or len(url) > 0):
			bdict = {'title': title, 'author':author, 'rating':rating, 'pid': pid, 'date_read': date_read, 'url': url}
			book_dicts.append(bdict)

	fout = open('books.json', 'w+')
	json.dump(book_dicts, fout, indent=4)