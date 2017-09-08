export default function getFlashcardLink(set) {
  let { title, urlKey } = set;
  title = title.replace(' ', '-');
  return `/${urlKey}/${title}-flashcards`;
}
