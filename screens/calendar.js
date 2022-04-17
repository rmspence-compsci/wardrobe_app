import React, { Component } from 'react'; 
import { render } from 'react-dom';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';

// save names of days and months in an array as well as the number of days in each month
var day_codes = ['S','M','T','W','T','F','S'];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// initialises new date objects
var date_selected = new Date();
var today = new Date();

// set dates to todays date
var today_date = today.getDate();
// get number of days in current month
var today_month_days = days_in_month[ today.getMonth() ];

// array for storing todays date as well as the next seven days dates
var week_date = [];

// fix for if week finishes in a new month 
for(let i = 0; i < 7; i++) {
  if (today_date + i > today_month_days){
    week_date[i] = (today_date + i) - today_month_days;
  }
  else {
    week_date[i] = today_date + i;
  }
}


const max_events = 2;

let events = [{          
  title: 'Event 1',
  date : 'Date',
  time : 'Time'
  },
  {
    title: 'Event 2',
    date : 'Date',
    time : 'Time'
  }
]


class calendar extends React.Component{

  // initialise variables to show the date selcted by the user
  state = {
    selected_date: date_selected.getDate(),
    selected_day: days[ (date_selected.getDay()) ],
    selected_month: months[ date_selected.getMonth() ],
    button_state: [styles.button_activated, styles.button, styles.button, styles.button, styles.button, styles.button, styles.button],
  }

  render(){

    // sets date selected by user to be a state
    const selected_date = this.state.selected_date;
    const selected_day = this.state.selected_day;
    const selected_month = this.state.selected_month;

    return (
      <View style={styles.container}>
        <View style={styles.header_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>My Calendar</Text>
          </View>
          
          // display day codes (e.g. M T W T F S ....)
          <View style={styles.day_code_container}>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
                {day_codes[(today.getDay())%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
                {day_codes[((today.getDay())+1)%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
                {day_codes[((today.getDay())+2)%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
                {day_codes[((today.getDay())+3)%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
              {day_codes[((today.getDay())+4)%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
              {day_codes[((today.getDay())+5)%7]}
              </Text>
            </View>
            <View style={styles.day_container}>
              <Text style={styles.day_codes}>
              {day_codes[((today.getDay())+6)%7]}
              </Text>
            </View>
          </View>
          
          // display buttons for selecting date
          <View style={styles.button_container}>
            <TouchableOpacity
              onPress={() => {this.set_date(0), this.button_selected(0)}}
              style = {this.state.button_state[0]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[0])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(1), this.button_selected(1)}}
              style = {this.state.button_state[1]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[1])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(2), this.button_selected(2)}}
              style = {this.state.button_state[2]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[2])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(3), this.button_selected(3)}}
              style = {this.state.button_state[3]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[3])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(4), this.button_selected(4)}}
              style = {this.state.button_state[4]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[4])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(5), this.button_selected(5)}}
              style = {this.state.button_state[5]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[5])}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {this.set_date(6), this.button_selected(6)}}
              style = {this.state.button_state[6]}
              >
                <View style={styles.day_container}>
                  <Text style={styles.day_codes}>{String(week_date[6])}</Text>
                </View>
            </TouchableOpacity>
          </View>


          // display selected date
          <View style={styles.date_container}>
            <Text style={styles.date}>
              {selected_day} {String(selected_date)} {selected_month}
            </Text>
          </View>

        </View>

        // display events
        <View style={styles.events_container}>
      
          // buffer for styling
          <View style={styles.event_buffer}></View>

            <View style={styles.event_buffer}>
            <View style={styles.event_container}>
                <Text style={styles.event_title}>
                  {events[0].title}
                </Text>
                <Text style={styles.event_time}>
                  {events[0].time}
                </Text>
                <Text style={styles.event_date}>
                  {events[0].date}
                </Text>
              </View>
            </View>

            <View style={styles.event_buffer}>
            <View style={styles.event_container}>
                <Text style={styles.event_title}>
                  {events[1].title}
                </Text>
                <Text style={styles.event_time}>
                  {events[1].time}
                </Text>
                <Text style={styles.event_date}>
                  {events[1].date}
                </Text>
              </View>
            </View>
          </View>
          
          // add event button
          <View style={styles.date_container}>
            <TouchableOpacity style = {styles.add_event_button}>
              <View style={styles.add_event_container}>
                <Text style={styles.add_event_text}>Add Event</Text>
              </View>
            </TouchableOpacity>
          </View>

      </View>
      
    );
  }

  // change the selected date based on the button clicked
  set_date = (increment) => {
    this.setState({
       selected_date: today.getDate() + increment,
       selected_day: days[(today.getDay() + increment) % 7],
    })
  }
  
  
  // change the colour of the button which has been clicked
  button_selected = (button_num) => {

    let new_button_state = this.state.button_state.slice(0); // makes copy of the array

    for(let i = 0; i < 7; i++){
      if (i == button_num){
        new_button_state[i] =  styles.button_activated;
      }
      else {
        new_button_state[i] = styles.button;
      }
    }
    this.setState({button_state: new_button_state});
  }
  
}

// styles
const styles = StyleSheet.create({
  container: {
  },
  header_container: {
    backgroundColor: '#16579c',
    justifyContent: "space-evenly",
    flexDirection: 'column',
    paddingVertical: 60,
  },
  title_container: {
    top: -15,
    width: 160,
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 21,
  },

  days: {
    justifyContent: "space-evenly",
    flexDirection: 'row',
    top: 65,
  },

  button_container: {
    justifyContent: "space-around",
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    width: 40,
    height: 40,
    top: 20,
  },
  button_activated:{
    backgroundColor: 'orange',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    width: 40,
    height: 40,
    top: 20,
  },

  date_container: {
    alignItems: 'center',
    top: 30,
  },
  date: {
    color: "white",
    fontSize: 18,
  },

  day_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  day_code_container: {
    justifyContent: "space-around",
    flexDirection: 'row',
    paddingHorizontal: 20,
    top: 15,
  },
  day_codes: {
    color: "white",
    fontSize: 15,
  },

  events_container: {
    backgroundColor: "#F8F8F8",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 500,
  },
  event_buffer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  event_container: {
    backgroundColor: "white",
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderRadius: 15,
    width: 350,
    height: 90,
  },
  event_title: {
    color: "black",
    fontSize: 19,
    paddingHorizontal: 15,
  },
  event_time: {
    color: "black",
    fontSize: 15,
    paddingHorizontal: 15,
  },
  event_date: {
    color: "black",
    fontSize: 15,
    paddingHorizontal: 15,
  },

  add_event_container:{
    alignItems: 'center',
  },
  add_event_button: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 18, 
    paddingVertical: 10,
    borderRadius: 15,
    top: Platform.OS == "ios" ? -80 : -140,
  },
  add_event_text: {
    color: "white",
    fontSize: 19,
  },
}
);

export default calendar;
