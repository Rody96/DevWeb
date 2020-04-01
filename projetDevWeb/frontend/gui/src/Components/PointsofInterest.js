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
            <h1>Point d'intérêts</h1>
            {this.state.items.map(item => (
              <dl key={item.nom_français}>
                <dt>{item.nom_français}</dt>
                <dd>{item.nom_scientifique}</dd>
              </dl>
            ))}
          </div>
        );
      }
    }
export default ListofPoints;