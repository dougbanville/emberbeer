import Route from '@ember/routing/route';

class Data{
  static init(controller, model){
    const strong = model.filter(r=>r.abv>6);
    controller.set('strongBeers',strong);
  }
}

export default class ClassRoute extends Route{

  async model() {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    return data;
  };

  setupController(controller,model){
    if (!controller.get('strongBeers')) Data.init(controller,model);
  }
};
