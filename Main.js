
const restaurant = {

    name:'classic Italino',
    categories:['italian','pizza','vegetrian'],
    staterMenu:['halim','biryani','itali','Dhosa'],
    mainMenu:['rice','plain rice','mutton rice'],
    numGuest:2,

    order:function(staterIndex,mainIndex){

        return [this.staterMenu[staterIndex],this.mainMenu[mainIndex]];
    },

    openingHours:{

        thu:{
            open:11,
            close:20
        },
        fri:{
            open:14,
            close:15
        }
    },
    orderDelivery:function({staterIndex=1,mainIndex=0}){

        console.log(`${this.staterMenu[staterIndex]} ${this.mainMenu[mainIndex]}`);
    }
}

//console.log(restaurant);

const arr = [10,20,30];
let[a,b,c] = arr;
console.log(a,b,c);

let[staterMenu,mainMenu] = [restaurant.staterMenu,restaurant.mainMenu];
console.log(staterMenu,mainMenu);

let[first,second,...others] = restaurant.mainMenu;
console.log(first,second,others);
[second,first] = [first,second];
console.log(first,second,others);

    const [item1,item2] = restaurant.order(0,2);
    console.log(item1,item2);

let nest = [1,2,[10,20,30],40]
console.log(nest);

let[x,y,,z] = nest;
console.log(x,y,z);

[i,,[j,k],l=100] =nest;
console.log(i,j,k,l);

//destructing object

let{fri:{open,close}} = restaurant.openingHours;
console.log(open,close);

  restaurant.orderDelivery({
      staterIndex:2,
      mainIndex:1
  })

const[aa,bb,...other] = [...restaurant.mainMenu];
console.log(aa,bb,other);

const name=['annie','hector','bridget','nic']
const[aaa,bbb,ccc,ddd] = [...name]
console.log(aaa,bbb,ccc,ddd);

const[...str] = [...'annie'];
console.log(str);
console.log(...'hector');

let input = [...'nic'];
console.log(input);


const employeee = ['allen','mark','ford',...name];
console.log(employeee);

const allMenu = [...restaurant.staterMenu,...mainMenu];
console.log(allMenu);


const print = function(...others){

    for(let i=0;i<others.length;i++)console.log('['+i+']');
}

print(1,2,3,4,5,6);
print(1,2);


//spread with object

const newResturant = {...restaurant};
console.log(newResturant);

const {...thu} = restaurant.openingHours;
console.log(thu);

console.log(3||'jonas');
console.log(false||'jonas');
console.log(0||true);
console.log(undefined||null);
console.log(null||false);
console.log(null||undefined);

const guest = restaurant.numGuest?restaurant.numGuest:10;
console.log(guest);

console.log(7&&'annie');
console.log('annie'&&true&&'hector');

const hi = restaurant.say&&restaurant.say();
console.log(hi||'method does not exists');

//not supported by nodejs use code editor[?? is nullish operator if result is 0 then it will print 0 only not ?? optr 0 not treated as false ?? optr basically uses for undefined or 0
//const numguest = restaurant.numGuest??10;


for(let menu of allMenu)console.log(menu);

//true
console.log(0===-0);
console.log(NaN===NaN);



const newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());


const weekdays = ['mon','tue','wed','thur','fri','sat','su']
const openingHours = {

    [weekdays[0]]:{
        open:11,
        close:14
    },
    [weekdays[2]]:{
        open:11,
        close:14
    },
    [weekdays[4]]:{
        open:13.30,
        close:14.15
    },
    [weekdays[weekdays.length-1]]:{
        open:'no open',
        close:'close'
    }
}

console.log(openingHours);

console.log(openingHours.fri.open);
//console.log(openingHours.su?.open);

for(const k of Object.keys(openingHours))console.log(`${k}`);

const v = Object.values(openingHours);
console.log(v);

const entries = Object.entries(openingHours);


//set

const set = new Set(['annie','hector','annie','nic','nic','nic','bridget']);
console.log(set);
console.log(set.size);
console.log(set.has('annie'));
set.add('allen');
set.delete('nic');


const array = [...set];
console.log(array);


const map = new Map();
const mmp = {};
    map.set('name','annie');
    map.set('email','annie01k@gmail.com');
   
   map.set('skills',['js','java','algorithm','dsa','html','css']).set('experience',['java','js','html','css']);

console.log(map);


const question = new Map([['question','what is best language'],[1,'c'],[2,'java'],[3,'js']]);
console.log(question.get('question'));

const keys = [...question.keys()]
console.log(keys);
const values =[...question.values()]
console.log(values);




const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline);
console.log(plane);
console.log(airline.length);

console.log(airline.indexOf('A'));

console.log(airline.lastIndexOf('A'));

console.log(airline.slice(0,4));
console.log(airline.slice(4));

console.log(airline.slice(0,airline.indexOf(' ')));

console.log((airline.slice(airline.lastIndexOf(' '))));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


let passenger = '  anNiE';

let lowerName = passenger.toLowerCase().trim();
console.log(lowerName);

passenger = lowerName[0].toUpperCase()+lowerName.slice(1);

console.log(passenger);

passenger = '  Nic';
console.log(passenger.trim());


let price = '288,97^';

    price = price.replace('^','$');

    console.log(price);
    price = price.replace(',','.');
    console.log(price);


let air = 'AirBus A320';

console.log(air.includes('Air'));
console.log(air.includes(3));


const checkBag = function(items){

    items = items.toLowerCase();

    if(items.includes('gun')||items.includes('knife'))
        console.log('you are NOT allowed');
    else
        console.log('welcome sir');
}

let data = 'i have a laptop,some food and one KNIFE';
    checkBag(data);
    data = 'i Got some snankes';
    checkBag(data);


let months = 'jan feb mar apr'.split(' ');
console.log(months);
console.log(months);

console.log(months.join(' '));//array to string


const upper = function(str){

    const arr = str.split(' ');//split function can accept only string values
    const month =[];
    for(let n of arr){
        month.push(n.toUpperCase());
    }
    
    console.log(month);
}

upper('jan feb mar apr jun jul aug');


const mask = function(card){

    const str = card;
    let  last = card.slice(-4);
     last = last.padStart(str.length,'*');
     return last;
}

console.log(mask('54321155223'));

const bookings = [];

const createBooking = function(flight='A320',NumPass,fare=12000){

    const booking = {

        fligh,
        NumPass,
        fare
    };
    console.log(booking)
    bookings.push(booking);
}

    
const annie ={

    name:'annie',
    passport:543213155223
};


const checkIn = function(flightNum,passenger){

    flightNum = 'Lh99';
    passenger.name ='Mr '+passenger.name; 
    passenger.passport = 155223543213;

    if(passenger.passport==543213155223)
        console.log('check in');
     else
         console.log('wrong passport');
}
console.log(annie);
checkIn('A320',annie);
console.log(annie);





const indiGO = {
    name:'ind233',
    iatacode:'In',
    booking:[],

    book(flightNum, name){

        console.log(`${name} booksed a seat on ${this.name} flight ${this.iatacode}${flightNum}`);
        this.booking.push({flight:`${this.iatacode}${flightNum}`,name});
    }

}

indiGO.book(239,'annie');
console.log(indiGO.booking);

const SpiceJet = {

    name:'spiceJet',
    iatacode:'sp',
    booking:[]
}

const book = indiGO.book;
      book.call(SpiceJet,23,'Nic');



const flight = [583,'Bridget'];

//using call and apply method passing a new object ot existing object 
book.call(SpiceJet,...flight);
book.apply(SpiceJet,flight);

