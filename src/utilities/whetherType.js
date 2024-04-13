import babelConfig from "../../babel.config";

export const weatherType = {
    ThunderStorm: {
        icon: 'zap',
        message: 'Snuggling inside while the storm rages outside.',
        backgroundColor: '#4C4855',
        gradient1:"#08001A",
        gradient2:"#4C4855"
     },
    Drizzle: { 
        icon: 'cloud-rain',
        message: 'Uh oh, umbrella dance time!',
        backgroundColor: '#287CBA',
        gradient1:"#123854",
        gradient2:"#287CBA"
    },
    Rain: { 
        icon: 'umbrella',
        message: 'Time to grab your raincoat!',
        backgroundColor: '#61AEE5',
        gradient1:"#0E2E45",
        gradient2:"#61AEE5"
    },
    Snow: { 
        icon: 'cloud-snow',
        message: 'Snow day? More like snow FUN day!',
        backgroundColor: '#8BAEC8',
        gradient1:"#8BAEC8",
        gradient2:"#8BAEC8"
    },
    Clear: { 
        icon: 'sun',
        message: 'Be your own sunshine!',
        backgroundColor: '#2D6A96',
        gradient1:"#1082B4",
        gradient2:"#D7F1FC"
    },
    Clouds: { 
        icon: 'cloud',
        message: 'You could live in the clouds',
        backgroundColor: '#123854',
        gradient1:"#17496E",
        gradient2:"#17496E"

    },
    Haze: { 
        icon: 'wind',
        message: 'It might be a bit damp',
        backgroundColor: '#58586e'
    },
    Mist: { 
        icon: 'align-justify',
        message: 'Mist-kissed mornings, a chance to start fresh. ️',
        backgroundColor: '#001A14',
        gradient1:"#001A14",
        gradient2:"#B6D5EB"
    }
}