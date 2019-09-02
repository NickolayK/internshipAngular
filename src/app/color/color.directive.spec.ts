import { ColorDerective } from "./color.directive";


describe('ColorDerective', ()=>{

    let directive :ColorDerective

    beforeEach( ()=>{
        directive = new ColorDerective;
    })

    it( 'should create instance' , ()=>{
        expect(directive).toBeTruthy();
    })

    it('should change color of host element to red' , ()=>{
        directive.onHostClick();
        expect(directive.color).toBe('red')
    })


})