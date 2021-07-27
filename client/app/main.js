import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  // valuesController = new ValuesController()

  jobsController = new JobsController();

  carsController = new CarsController();

  housesController = new HousesController();

}

window["app"] = new App();
