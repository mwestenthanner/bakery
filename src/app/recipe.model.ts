export class Recipe {

  public title: string;
  public desc: string;
  public imgHor: string;
  public imgVer: string;
  public ingredients: string[];
  public instructions: string[];
  public duration: number;
  public tags: string[];

  constructor (title: string, desc: string, imgHor: string, imgVer: string, ingredients: string[], instructions: string[], duration: number, tags: string[]) {
    this.title = title;
    this.desc = desc;
    this.imgHor = imgHor;
    this.imgVer = imgVer;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.duration = duration;
    this.tags = tags;
  }

}
