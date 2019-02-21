export class Post {

  constructor(
    public title: string,
    public content: string[],   //Les étapes de l'exercice sous forment de string dans un tableau.
    public averageTime: number, //temps moyen pour réaliser l'exercice en min 
    public created_at: Date,
    public note: number,      //note sur 5 si l'exercie est apprécié
    public achieve: number    //nombre de fois que l'exercice à été fait
  ){
  }
}
