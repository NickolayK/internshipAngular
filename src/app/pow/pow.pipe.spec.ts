import { TestBed } from "@angular/core/testing";
import { PowPipe } from './pow.pipe';


describe('PowPipe' , ()=>{

    let pipe: PowPipe

    beforeEach( ()=>{
        pipe = new PowPipe();
    })


    it('should create instance' , ()=>{
        expect(pipe).toBeTruthy();
        expect(pipe.transform).toBeDefined();
    })

    it('should return 8 if called with 2 and pow =3', ()=>{
        let result = pipe.transform(2,3);
        expect(result).toEqual(8);
    })
})