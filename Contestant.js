class Contestant {
    constructor(){
      this.index = null;
      this.option = this.input1;
      this.name = null;

    }
  
   


    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "Contestants/Contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        option:this.option
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  