import React from 'react';
import Button from './button'
import Sponsor from './sponsorComponent'
import ButtonShare from './buttonshareComponent'
import Organizer from './organizerComponent'
import Map from './Map'
import Place from './Place'
class App extends React.Component {
    constructor(props){
        super(props);
        this.pdfToHTML=this.pdfToHTML.bind(this);
        }
    pdfToHTML(){
    var pdf = new jsPDF('p', 'pt', 'letter');
    var source = $('#HTMLtoPDF')[0];
    var specialElementHandlers = {
        '#bypassme': function(element, renderer){
            return true
        }
    }
    var margins = {
        top: 50,
        left: 60,
        width: 545
    };
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
            , 'elementHandlers': specialElementHandlers
        },
        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('html2pdf.pdf');
        }
    )
}
   render() {
       return (
           <div className="ticket-item-panel-qr">

                   <div id="HTMLtoPDF">
                       <div className="col-md-24 ticket-no-padding">
                           <h5>Email: </h5>
                           <h5>Serial Number: </h5>
                           <img src="images/dinh.JPG" style={{width:310,height:340}} />
                       </div>
                   </div>
                   <a href="#" onClick={this.pdfToHTML}>Download PDF</a>
                   <button className="btn btn-default">Export Image</button>

           </div>

       )
   }
}

export default App;
