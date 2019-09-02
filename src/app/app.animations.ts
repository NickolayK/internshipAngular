import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';


export const divTrigger = trigger('divTrigger', [
// 'void => *' === ':enter'
    // transition(':enter', [
    //     style({
    //         opacity:0
    //     }),
    //     animate(500 , style({
    //         opacity:1
    //     }))
    // ]),
    // //'* => void'  === ':leave'
    // transition(':leave', animate(2000, style({
    //     opacity:0
    //     })
    //    )
    // )


    transition(':enter' , [

            style({
                width:'*',
                height: '*'
            }),
            group([
                animate(3000, style({
                    width:'200px',
                    height: '200px',

                })),
                animate(6000, keyframes([
                    style({
                        backgroundColor: 'blue',
                        offset: 0
                    }),
                    style({
                        backgroundColor: 'yellow'
                        , offset: 0.97
                    }),
                    style({
                        backgroundColor: 'black',
                        offset: 1
                    })
                ]))
            ])
,
            animate(3000 )

    ])
])


export const changeWithTriger = trigger('changeWith', [

  transition('* => *' , [
      animate(1000, style({
        width: '10px'

    })),
    animate(1000 , style({
        width : '*'
    })),
    animate(1000 ,style({
        height : '20px'
    })),
    animate(1000, style({
        height : '*'
    }))
  ]) 

])