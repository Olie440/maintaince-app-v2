import template from './template.html';

function controller() {
    this.message = 'The office will be open until 5pm';
    this.status = 'available';
}

export default { 
    template, 
    controller
};