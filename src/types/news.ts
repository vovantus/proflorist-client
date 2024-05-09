export default interface News {
  id: string;
  header: string;
  text: string;
  date: Date;
  imageUrl: string;
  linkTitle?: string;
  categoryId?: string;
}
