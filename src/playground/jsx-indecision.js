console.log("app.js is running");


const app ={
    title:'Indecision App',
    subtitle: 'Put your life in the safe hands of a computer',
    options:[]
};

const appRoot = document.getElementById("app");

const onFormSubmit =(e)=>{

    e.preventDefault();
const option = e.target.elements.option.value;
if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
}
reactRendercall();
};

const removeAll = () =>{
   app.options =[];
   reactRendercall();
};

const onMakeDecision =()=>{
    const randNumber = Math.floor(Math.random()*app.options.length);
    alert(app.options[randNumber]);
}


const numbers = [24,66,890];
const reactRendercall = ()=>{

    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle&&<p> {app.subtitle}</p>}
            <p>{app.options.length>0? "Here are your options" : "No options to display"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {app.options.map((str)=>{
                    return <li key={str}>{str}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);

};
reactRendercall();