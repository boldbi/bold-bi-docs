---
layout: post
title: Data Alerts & Notifications | Bold BI Documentation
description: Learn how to configure data alerts that helps to track threshold limit and notify to certain recipients when it was reached.
platform: bold-bi
documentation: ug
---

# Create Data Alerts in Bold BI

Data alert provides the users to track certain conditions and respond it to a specified recipients via mail when a certain predefined threshold is met.

## Add a Data Alert
Follow these steps to create the new data alert with the desired dashboard.

### Steps to create a schedule
### Select dashboard
Click `Actions` in the dashboard grid context menu and select `Create Schedule` to schedule the corresponding dashboard.

![Create Schedule Dashboard](/static/assets/visualizing-data/working-with-widgets/images/create-dashboard-schedule.png)  

Otherwise, click `Schedule` option from the side menu to create a schedule.

![Side Menu Schedule](/static/assets/visualizing-data/working-with-widgets/images/side-menu-schedule.png)  

Schedules can be created for respective dashboard. Enter the schedule `Name` and then `Data Alerts` needs to be enabled.

![Enable Data Alert](/static/assets/visualizing-data/working-with-widgets/images/data-alert.png)  

### Data Alert

Data alert screen has the option to add conditions for the desired dashboards. Each condition has the source column name, aggregation, and target column to compare. A `Where Condition` can be added as globally or for each condition. After the successful validation, the user can be navigating to the next screen, otherwise, the error message displayed at the top of the dialog box and the screen remains exists until the successful validation.

1. Select the `Widget` that you want to add the threshold condition and select any one of the `Condition`. By Default, the condition will be `Value Changes`.

   ![select-column](/static/assets/visualizing-data/working-with-widgets/images/select-dataalert-widget.png)
  
   1.`Value Changes` - Checks whether the filtered value changes and can be evaluated either expression or a single column.
   
   If it is an expression, the user can be notified when it satisfies the condition.

   * The user can add the expression as per their need as follows.
   
       ![Condition Type 1](/static/assets/visualizing-data/working-with-widgets/images/condition-valuechanges.png)
   
   * To switch the expression to a single column click on the close button as below,  
   
       ![valuechanges-removecomparisontarget](/static/assets/visualizing-data/working-with-widgets/images/valuechanges-removecomparisontarget.png)

   * Click `Add Comparison Target` to add expression.  
    
       ![valuechanges-addcomparisontarget.png](/static/assets/visualizing-data/working-with-widgets/images/valuechanges-addcomparisontarget.png)
 
  If it is a single column, the user can be notified when there is a change in the column value compared to the previous value.
 
   2.`Increases` - Checks whether the filtered value increases once.

   3.`Continuously Increases` - Checks whether the filtered value increases continuously.

   4.`Decreases` - Checks whether the filtered value decreases once.

   5.`Continuously Decreases` - Checks whether the filtered value decreases continuously.  
 
2. Add more conditions by clicking the `Add Condition`.  

  ![add-condition](/static/assets/visualizing-data/working-with-widgets/images/add-more-conditions.png)

3. Add `Where` condition for each filter by clicking the `Add Where Condition`.  

  ![add-where-condition](/static/assets/visualizing-data/working-with-widgets/images/add-where-condition.png)

4. The column values can be compared with custom or actual values. Actual values are listed from the database and the custom values are the input provided by the user.  

  ![add-where-column](/static/assets/visualizing-data/working-with-widgets/images/add-where-column.png)

  ![add-more-where-column](/static/assets/visualizing-data/working-with-widgets/images/add-where-more-conditions.png)

## Create a New Expression

In data alert, a new option is included to create expressions with the combinations of unbounded data source columns of selected widget and multiple functions. For instance, [Sum(Column1) - Sum(Column2)].

### Steps to add a custom expression

1. After selecting the widget, click `Create expression columns` label at the top of filter in the data alerts screen.  

  ![Expression-icon](/static/assets/visualizing-data/working-with-widgets/images/custom-expression-label.png)  

2. Create expression dialog box opens as follows.  

  ![Expression-dialog](/static/assets/visualizing-data/working-with-widgets/images/custom-expression-screen.png)

  In previous dialog box, create expressions column lists all the saved expressions of the appropriate data source.

  You can add a new expression by providing values to name and expression input fields.

  Functions and column settings drop-downs provides multiple functions and data source columns of selected widget to create expressions.

3. Click `Add` to add a default expression name in the name input field.

  ![add-new-expression](/static/assets/visualizing-data/working-with-widgets/images/add-new-expression.png)

  Expression name can also be changed. 

  ![expression-name](/static/assets/visualizing-data/working-with-widgets/images/expression-name.png)

4. Expressions can be formed with the combinations of functions and column names, from the functions and column settings drop-downs.  

  ![Expression-function-columns](/static/assets/visualizing-data/working-with-widgets/images/function-column-dropdowns.png)

  Functions and column settings are categorized under various types and they can also be filtered by the first drop-downs underneath their headings. 

  While clicking the functions, the example and short description of them are displayed at the left. 
   
  Expression can be inserted into its input field by double clicking the required values from the functions and column settings drop-downs.

5. Created expression can be added by clicking the `Save`.

  ![save-expression](/static/assets/visualizing-data/working-with-widgets/images/save-expression.png)

6. Saved expression is listed under the custom expressions column as follows.

  ![expression-list](/static/assets/visualizing-data/working-with-widgets/images/saved-expressions-list.png)

7. When you clicked any expression in this list, the appropriate name and expression is filled in the right-panel. You can update this saved expression and can be saved again.

8. Expressions can be deleted by clicking the close icon, which is visible on hovering the custom expressions list.

  ![delete-expression](/static/assets/visualizing-data/working-with-widgets/images/close-icon.png)

9. Click on the close icon or `Back` button to close the custom expression dialog box.

  ![close-dialog](/static/assets/visualizing-data/working-with-widgets/images/close-dialog.png)

10. Once the dialog box is closed, all the saved expressions are listed under all the selected column drop-downs of both measure and dimensions in the data alerts screen as follows.

  ![saved-expression](/static/assets/visualizing-data/working-with-widgets/images/dimension-measure.png)

#### Global Where Condition

Add common `Where` condition for two or more filters by clicking the `Add Global Where Condition`.  
 
![global-condition](/static/assets/visualizing-data/working-with-widgets/images/add-global-where-condition.png)

#### Email Editor

Email editor provides an option to edit the email body of the data alert mail and embed the selected database column values into the email body. The `Select Field` describes the database columns that are chosen on data alert screen. The values of each inserted column can be replaced while sending mail by Bold BI. 

![email-editor](/static/assets/visualizing-data/working-with-widgets/images/email-editor.png)

#### Recurrence Interval

Dashboards can be scheduled on `hourly, daily, weekly, monthly and yearly`.

![schedule-type](/static/assets/visualizing-data/working-with-widgets/images/schedule-type.png)

#### Choose Subscribers

Dashboards can be exported as Image, PDF, CSV, and Excel. Exported dashboards can be sent to individual users or groups or to external recipients.

![schedule-mail](/static/assets/visualizing-data/working-with-widgets/images/recipients.png)

## Edit Data Alert

Name, data alert, schedule type, email content, export format, and the recipients can be changed in the `Edit` schedule dialog box.

![edit-schedule](/static/assets/visualizing-data/working-with-widgets/images/edit-schedule.png)

## Run Now

Schedules can be made to run on demand by clicking the `Run Now` option in the schedule grid context menu. Dashboard get exported in the specified format and sent to the recipients, if the threshold condition is met.

![run-now](/static/assets/visualizing-data/working-with-widgets/images/run-now.png)

## Delete Data Alert

Data alert can be deleted from the dashboard server when it is no longer required. Click `Actions` in the schedules grid context menu and select `Delete` to delete the data alert.

![delete-schedule](/static/assets/visualizing-data/working-with-widgets/images/delete-schedule.png)