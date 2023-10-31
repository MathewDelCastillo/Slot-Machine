class Machine extends React.Component {
    render() {
        
      const { s1, s2, s3 } = this.props;
      const winner = (s1 === s2) && (s2 === s3);

      let colors ={
        color: this.props.color,
        backgroundColor: this.props.backgroundColor,
      }  

      return (
        <div style={colors}>
          <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
          <p>You {winner ? "win!" : "lose!"}</p>
        </div>
      );
    }
  }