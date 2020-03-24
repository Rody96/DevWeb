import React, {Component} from 'react';

class ListofPoints extends Component{
    state = {
        items: []
      };
    
      async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/Arbres_Remarquables/');
          const items = await res.json();
          this.setState({
            items
          });
        } catch (e) {
          console.log(e);
        }
      }
    
      render() {
        return (
          <div>
            {this.state.items.map(item => (
              <div key={item.nom_français}>
                <h1>{item.nom_français}</h1>
                <span>{item.nom_scientifique}</span>
              </div>
            ))}
          </div>
        );
      }
    }
export default ListofPoints;