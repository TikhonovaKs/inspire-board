type Image = {
  id: number;
  src: {
    original:string
  };
  alt: string;
  isSaved: boolean;
  index?: number;
};

export default Image;
