BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    var abpos = BloodType.AB_POS;
    var abneg = BloodType.AB_NEG;
    var apos = BloodType.A_POS;
    var aneg = BloodType.A_NEG;
    var bpos = BloodType.B_POS;
    var bneg = BloodType.B_NEG;
    var opos = BloodType.O_POS;
    var oneg = BloodType.O_NEG;

    console.log(blood_inventory.oneg);

    if (patient.blood_type === oneg){
      if (blood_inventory.oneg > 0){
        return oneg;
      }
    else if(patient.blood_type === opos) {
      if (blood_inventory.opos > 0){
        return opos;
      }
    else {
        return false;
      }
    }

    // if (patient.blood_type === bneg){
    //   if (blood_inventory.bneg > 0){
    //     return bneg;
    //   }else{
    //   return false;
    // }


  //   // give a random blood type to anyone
  //   // very bad idea!
  //   return [
  //     BloodType.AB_POS,
  //     BloodType.AB_NEG,
  //     BloodType.A_POS,
  //     BloodType.A_NEG
  //   ][Math.floor(Math.random()*4)];

    }
  }

};