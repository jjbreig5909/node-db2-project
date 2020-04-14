
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("car-dealer").insert([
        {
          vin: "1ab3fi5rty6id45f",
          make: "Dodge",
          model: "Challenger",
          mileage: 32000,
          automatic: false,
          title: "",
        },
        {
          vin: "1ab3fiir999id45f",
          make: "Dodge",
          model: "Viper",
          mileage: 2000,
          automatic: false,
          title: "salvage",
        },
        {
          vin: "hfj56ifoila24i567",
          make: "Dodge",
          model: "Charger",
          mileage: 16000,
          automatic: true,
          title: "clean",
        },
      ]);
    });
};
