# PlanPal 

## Overview
Lesson planning is a never-ending process for teachers. Between grading, teaching, and trying to maintain a personal life, it can be tough to stay organized. Week after week, planning lessons can become overwhelming to manage.

That’s where **PlanPal** comes in! PlanPal is a web app that helps teachers create, submit, and keep track of all their lesson plans in one place. It reminds teachers of the standards each lesson must meet, and provides easy access to linked materials like activities, slides, and worksheets. The app also sends notifications about planning deadlines and streamlines the approval process with supervisors all in one unified platform.


## Data Model

The application will store Users and Lesson Plans.
* Users can have multiple lesson plans (via references).
* Lesson plans belong to a single user (teacher) and can store information about materials, standards, due dates, and supervisor feedback.
* Supervisor will have the ability to provide feedback, approve, or decline the Lesson plans

An Example User:

```javascript
{
  "username": "mrsmith",
  "hash": "/* password hash */",
  "role": "supervisor", //Supervisor or teacher
  "lessonPlans": [] // Supervisors don't own lesson plans, they only review them
}
```

An Example Lesson Plan with Embedded Items:

```javascript
{
  "user": /* reference to teacher User */,
  "teacherName": "Mr. Lopez",
  "title": "Exploring Plant Life Cycles",
  "grade": "4th Grade",
  "subject": "Science",
  "period": "Period 3",
  "dateTeaching": "2025-11-10",
  "learningObjective": "Students will be able to describe the stages of a plant's life cycle.",
  "learningStandard": "NGSS.4.LS1.1",
  "introduction": "Start with a short video about how seeds grow into plants.",
  "activities": "Students will observe and label parts of a real plant.",
  "closing": "Class discussion and reflection journal entry.",
  "notes": "",
  "approved": false,
  "status": "pending_supervisor",
  "createdAt": "2025-10-29T12:00:00Z"
}
```


## [Link to Commented First Draft Schema](db.js) 

## Wireframes

/login - page for showing login screen

![login](documentation/login-screen.png)

/register - page for showing registering user screen

![register](documentation/register-screen.png)

/setup - page for showing user set up account screen

![setup](documentation/account-setup.png)

/supervisor/home - page for supervisor homepage

![supervisor home](documentation/supervisor-home.png)

/supervisor/view - page for viewing all supervisor lesson plans

![supervisor view](documentation/supervisor-view-all.png)

/supervisor/view/slug - page for viewing a specific supervisor lesson

![supervisor view slug](documentation/supervisor-lesson-plan-approve.png)

/supervisor/profile - page for viewing supervisor profile

![supervisor profile](documentation/supervisor-profile.png)

/teacher/home - page for viewing a teacher's homepage 

![teacher home](documentation/teacher-home.png)

/teacher/view - page for viewing all teacher's lesson plans

![teacher view](documentation/teacher-view-all.png)

/teacher/view/create - page for viewing all teacher's lesson plans

![teacher view create](documentation/teacher-create-new.png)

/teacher/view/slug - page for viewing one teacher's lesson plans

![teacher view slug](documentation/teacher-view-one.png)

/teacher/standards - page for viewing all teacher's standards

![teacher standards](documentation/teacher-standards.png)

/teacher/profile - page for viewing teacher's profile

![teacher profile](documentation/teacher-profile.png)



## Site map

![teacher profile](documentation/site-map.png)

## User Stories or Use Cases

1. As a teacher, I want to create and log into my account, so that I can securely access my lesson plans.
2. As a teacher, I want to edit my profile information, so that I can keep my account details up to date.
3. As a teacher, I want to create new lesson plans by filling out details such as title, grade, subject, objectives, and activities, so that I can organize and prepare my classroom materials.
4. As a teacher, I want to attach learning standards and materials to each lesson plan, so that I can align my lessons with required guidelines.
5. As a teacher, I want to view all my submitted lesson plans, so that I can review my past and upcoming lessons.
6. As a teacher, I want to see the approval status (pending, approved, declined) of my lesson plans, so that I know which ones need updates.
7. As a teacher, I want to edit and resubmit declined lesson plans, so that I can make corrections based on supervisor feedback.
8. As a teacher, I want to read feedback or notes left by my supervisor, so that I can improve my lesson plans.
9. As a teacher, I want to be notified when my lesson plan is approved or declined, so that I can respond in a timely manner.
10. As a supervisor, I want to log into my account, so that I can review lesson plans submitted by teachers.
11. As a supervisor, I want to view and update my profile information, so that my contact and professional details stay accurate.
12. As a supervisor, I want to view all lesson plans submitted by teachers, so that I can evaluate their content.
13. As a supervisor, I want to filter lesson plans by approval status (pending, approved, declined), so that I can manage reviews efficiently.
14. As a supervisor, I want to approve or decline lesson plans, so that I can maintain teaching quality standards.
15. As a supervisor, I want to add notes or feedback when declining a lesson plan, so that teachers understand what needs to be improved.
16. As a supervisor, I want to mark lesson plans as approved, so that teachers know they’re ready for use in class.

## Research Topics
* (4 points) Client-side calendar view
    * _What is it?_ FullCalendar.js is a JavaScript library that provides an interactive, full-sized calendar interface in web applications. It allows you to display events, appointments, or tasks dynamically and supports drag-and-drop, custom views (month, week, day), and event management features.
    * _Why use it?_ FullCalendar can help in visually displaying scheduled lesson plans by date. This improves the user experience for teachers and supervisors, making it easy to track upcoming lessons, pending approvals, or overdue tasks at a glance. It also reduces errors compared to manually checking dates.
    *  _List of possible candidate modules or solutions:_ 
        * FullCalendar constructor – initialize the calendar in the teacher or supervisor dashboard
        * events array – dynamically feed lesson plan data from the database into the calendar
        * dayClick / eventClick – handle clicks on dates or events to view or edit lesson plans
        * views – customize month/week/day views depending on user preference

* (3 points) Server-side email notifications
    * _What is it?_ Nodemailer is a Node.js library for sending emails using SMTP or third-party services like Gmail or SendGrid. It allows your server to send messages programmatically when certain actions occur, such as lesson plan approvals.
    * _Why use it?_ Nodemailer can automatically notify teachers when their lesson plans are approved, declined, or when feedback is added. This improves communication, keeps users informed, and adds professional functionality to the app.
    * _List of possible candidate modules or solutions:_ 
        * createTransport() – configure SMTP settings or API service
        * sendMail() – send emails to teachers or supervisors
        * HTML templates for email body content
        * Integration with lesson plan approval events in Express routes

* (4 points) Client-side drag-and-drop ordering
    * _What is it?_ SortableJS is a lightweight JavaScript library that allows items in a list or container to be reordered via drag-and-drop. It supports touch devices, nested lists, and custom animations.
    * _Why use it?_ SortableJS can enable teachers to reorder activities or sections within a lesson plan visually. This improves user experience, makes editing intuitive, and prevents errors compared to manually entering order numbers.
    * _List of possible candidate modules or solutions:_ Sortable constructor – initialize drag-and-drop on a list of lesson plan activities
        * onEnd event – capture new order and update database
        * draggable class – define which elements can be dragged
        * Integration with Vue.Draggable or React DnD for component-based frontends

11 points total out of 8 required points 


## [Link to Initial Main Project File](app.mjs) 

## Annotations / References Used

1. [FullCalendar Official Website](https://fullcalendar.io/) - (add link to source code that was based on this)
2. [Nodemailer.js](https://nodemailer.com/) - (add link to source code that was based on this)
3. [SortablesJS](https://sortablejs.github.io/Sortable/) - (add link to source code that was based on this)
