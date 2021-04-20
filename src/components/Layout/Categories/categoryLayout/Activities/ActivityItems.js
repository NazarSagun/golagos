import React from 'react';
import './index.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import {fetchActivityItem} from '../../../../../actions'

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from "../../../Tabs/Tabs"; 
import 'react-tabs/style/react-tabs.css';

class ActivityItems extends React.Component {

  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);
  }

  // componentDidMount() {
  //  axios.get('/activity_dawnload').
  //   then(response => {
  //     console.log(response)
  //   })
  // }

  setTab(e) {
    this.setState({tab: e.target.innerHTML})
    
  }

  // componentDidMount() {
  //   this.props.fetchActivityItem();
  // }

  render() {

    const arr = [
      {
          title: 'Sport',
          act_id: 1,
          activity_items: [
            {
              id: 8,
              title: "Bike",
              img: "img.jpg"
            },
            {
              id: 9,
              title: "Cycling",
              img: "img.jpg"
            },
            {
              id: 10,
              title: "Jumping",
              img: "img.jpg"
            },
          ]
        },
        {
          title: 'Meditation',
          act_id: 3,
          activity_items: [
            {
              id: 11,
              title: "Meditation with Karolina",
              img: "img.jpg"
            },
            {
              id: 12,
              title: "Beach Breath",
              img: "img.jpg"
            },
            {
              id: 13,
              title: "Meditation",
              img: "img.jpg"
            },
          ]
        },
        {
          title: 'Golf',
          act_id: 4,
          activity_items: [
            {
              id: 14,
              title: "Oak hill",
              img: "img.jpg"
            },
            {
              id: 15,
              title: "Ter hill",
              img: "img.jpg"
            },
            {
              id: 16,
              title: "Pot hill",
              img: "img.jpg"
            },
          ]
        },
        {
          title: 'Games',
          act_id: 2,
          activity_items: [
            {
              id: 17,
              title: "Football",
              img: "img.jpg"
            },
            {
              id: 18,
              title: "Basketball",
              img: "img.jpg"
            },
            {
              id: 19,
              title: "Games",
              img: "img.jpg"
            },
          ]
        },  
    ]

    return (
     
        <Tabs>
        {arr.map((i) => (
          <div label={i.title}> 
            <div className="tab-container">
              
            <Swiper
                spaceBetween={1}
                slidesPerView={3}
              >
            {i.activity_items.map(a => (
              
              
                <SwiperSlide>
                  <Link key={a.id} to={`/Activities/${a.id}`}>
                    <div className="mixed-slider-item">
                      <img className="mixed-slider-img" src={'images/categories/main-page.jpg'} />
                      <img className="mixed-slider-icon" src={'images/icons/white-plus.png'} />
                      <h4>{a.title}</h4>
                    </div>
                  </Link>
                </SwiperSlide>
                
              
          
            ))}
            </Swiper>
            </div> 
          </div>
        ))}
      </Tabs>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     activityItem: Object.values(state.data.data),
//     isFetching: state.data.isFetching
//   }
// }

// export default connect(mapStateToProps, {fetchActivityItem})(ActivityItems);
export default ActivityItems;


  