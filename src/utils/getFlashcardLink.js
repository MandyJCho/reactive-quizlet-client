export default function getFlashcardLink(set) {
  // eslint-disable
  let {title, urlKey} = set;
  title = title.replace(' ', '-');
  return `/${urlKey}/${title}-flashcards`;
}
