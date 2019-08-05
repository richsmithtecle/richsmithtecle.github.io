class JSXDemo extends React.Component {
    render() {
       return (
           <div>
               <h1>My Image</h1>
               <img src="https://images.unsplash.com/photo-1562499332-64827643864f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
           </div>
       );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
