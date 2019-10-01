import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'; 

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Chips',
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/15/09/chips.jpg?w968h681',
                id: 1
            },
            {
                title: 'Chips two',
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/15/09/chips.jpg?w968h681',
                id: 3
            },
            {
                title: 'Chips three',
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/15/09/chips.jpg?w968h681',
                id: 3
            },

            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem id={id} title={title}  />
                    ))
                }
            </div>
        )
    }
}

export default Directory;