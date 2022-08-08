/**
 * @property {string} title
 * @property {Author} author
 * @property {Publisher} publisher
 * @property {Collection<BookTag>} tags
 */
export class Book extends BaseEntity {

    /**
     * @param {string} title
     * @param {Author} author
     */
    constructor(title, author) {
      super();
      this.title = title;
      this.author = author;
    }
  
}