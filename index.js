class App extends React.Component{
    render(){
        return(
            <div>
                <Machine
                    s1 = "🍋"
                    s2 = "🍋"
                    s3 = "🍋"
                    color = "rgba(0,0,0)"
                    backgroundColor = "rgba(124, 255, 25)"
                />
                <Machine
                    s1 = "🍋"
                    s2 = "🍇"
                    s3 = "🍋"
                    color = "rgba(0,0,0)"
                    backgroundColor = "rgba(255, 0, 0)"
                />
                <Machine
                    s1 = "🍇"
                    s2 = "🍇"
                    s3 = "🍇"
                    color = "rgba(0,0,0)"
                    backgroundColor = "rgba(124, 255, 25)"
                />
                <Machine
                    s1 = "🍉"
                    s2 = "🍉"
                    s3 = "🍉"
                    color = "rgba(0,0,0)"
                    backgroundColor = "rgba(124, 255, 25)"
                />
                <Machine
                    s1 = "🍇"
                    s2 = "🍋"
                    s3 = "🍉"
                    color = "rgba(0,0,0)"
                    backgroundColor = "rgba(255, 0, 0)"
                />   
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));