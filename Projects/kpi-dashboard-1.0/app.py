import pandas as pd
import streamlit as st
import plotly.express as px
import numpy as np
from PIL import Image
import datetime
import plotly.graph_objects as plotlyGraph






# ***************************************************************************************
# 1.Set Dashboard Layout
# ***************************************************************************************
st.set_page_config(
    page_title="Nucleus KPI Dashboard",
    page_icon=":bar_chart",
    layout="wide"
)

with open('style.css') as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)






# ***************************************************************************************
# 2. Load Data Source
# ***************************************************************************************
df = pd.read_excel(
    io='Dashboard-1.xlsx',
    engine='openpyxl',
    sheet_name='Data',
    skiprows=0,
    usecols='A:BM',
    nrows=50,
)





# ***************************************************************************************
# 3. Set Onscreen Filters
# ***************************************************************************************
st.sidebar.header("Filter results here:")

account = st.sidebar.multiselect(
    label = "Select Bill Account Number(s)",
    options=df["Account Number"].unique(),
    default=df["Account Number"].unique()
)

today = datetime.date.today()
# yesterday = today - datetime.timedelta(days=1)
# tomorrow = today + datetime.timedelta(days=1)
start_date = st.sidebar.date_input('Start date', today - datetime.timedelta(days=1))
end_date = st.sidebar.date_input('End date', today)
if start_date <= end_date:
    st.sidebar.success('Start date: `%s`\n\nEnd date:`%s`' % (start_date, end_date))
else:
    st.sidebar.error('Error: End date must fall after start date.')

courier = st.sidebar.multiselect(
    label = "Select Courier(s)",
    options=df["Courier"].unique(),
    default=df["Courier"].unique()
)

service = st.sidebar.multiselect(
    label = "Select Service Code(s)",
    options=df["Service Code"].unique(),
    default=df["Service Code"].unique()
)

podstatus = st.sidebar.multiselect(
    label = "Select POD Status",
    options=df["POD Status"].unique(),
    default=df["POD Status"].unique()
)

sla_reason_code = st.sidebar.multiselect(
    label = "Select SLA Reason Code(s)",
    options=df["SLA Service Failure Code"].unique(),
    default=df["SLA Service Failure Code"].unique()
)








# ***************************************************************************************
# 4. Set new DataFrame based on filters applied by user
# ***************************************************************************************
df_selection = df.query(
    "`Account Number` == @account & `Waybill Created Date` >= @start_date & `Waybill Created Date` <= @end_date & Courier == @courier & `Service Code` == @service & `POD Status` == @podstatus & `SLA Service Failure Code` == @sla_reason_code"
)





# ***************************************************************************************
# 5.1 Create Page TABS and Content CONTAINERS
# ***************************************************************************************

header = st.container()
summary, csd_dashboard, ops_dashboard, finance_dashboard, it_dashboard = st.tabs(["HOME","CUSTOMER SERVICE", "OPERATIONS", "FINANCE", "IT"])
# summary = st.container()
# ops_dashboard = st.container()
# finance_dashboard = st.container()
# csd_dashboard = st.container()
# it_dashboard = st.container()
footer = st.container()








# ***************************************************************************************
# 6. Add Content to Content Containers
# ***************************************************************************************
# ***************************************************************************************
# 6.1 Page Heading
# ***************************************************************************************
st.markdown("###")


with header:
    columnHeader1, columnHeader2 = st.columns(2)
    # Display Customer Name from account name dictionary
    with columnHeader1:
        st.subheader('Customer(s):')
        accountName = {
            "LRM001": "Leroy Merlin 1",
            "LRM002": "Leroy Merlin 2",
            "LRM003": "Leroy Merlin 3",
            "LRM004": "Leroy Merlin 4",
            "LRM005": "Leroy Merlin 5"
            }
        for key, value in accountName.items():
            if key in (df_selection["Account Number"].unique()):
                st.subheader((value))
    
    with columnHeader2:
        st.image(Image.open('streamlit-logo-secondary-colormark-darktext.png'))
        # st.image(Image.open('c:\Gundam.jpg'))





# ***************************************************************************************
# 6.2 Summary KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with summary:
    st.subheader('Summary of Account(s) - OPS | CSD | Finance | IT')
    
    chargeMassBilled = df_selection[df_selection["Customer Billed"] == 'Yes']["Charged Mass KG"].sum()
    chargeMassBillingDue = df_selection.query(' `Customer Billed` == "No" & `POD Date`.notna() ')["Charged Mass KG"].sum()
    waybillsManifested = df_selection[df_selection["Waybill Manifested Date"].notnull()]
    waybillsNotManifested = df_selection[df_selection["Waybill Manifested Date"].isna()]
    waybillsDelivered = df_selection[df_selection["POD Date"].notna()]
    waybillsNotDelivered = df_selection[df_selection["POD Date"].isna()][df_selection["Waybill Manifested Date"].notna()]
    chargeMassManifested = df_selection[df_selection["Waybill Manifested Date"].notna()]["Charged Mass KG"].sum()
    chargeMassNotManifested = df_selection[df_selection["Waybill Manifested Date"].isna()]["Charged Mass KG"].sum()
    chargeMassDelivered = df_selection[df_selection["POD Date"].notna()]["Charged Mass KG"].sum()
    chargeMassNotDelivered = df_selection[df_selection["POD Date"].isna()]["Charged Mass KG"].sum()
    billedYes = df_selection[df_selection["Customer Billed"] == 'Yes']["Charge: Sub Total"].sum()
    billedNo = df_selection.query(' `Customer Billed` == "No" & `POD Date`.notna() ')["Charge: Sub Total"].sum()
    df_unattendedDeliveryQueries = df_selection[df_selection["SLA: Serv Code SLA Achieved"] == 'No']["SLA: Service Failure Description"].isna()
    
    columnSummary1, columnSummary2, columnSummary3, columnSummary4 = st.columns(4)
    with columnSummary1:
        st.metric(
            label="Orders Despatched:",
            value=f"{waybillsManifested.shape[0]}",
            delta = f"{chargeMassManifested} kg"
        )

    with columnSummary2:
        st.metric(
            label="Orders NOT Despatched:",
            value=f"{waybillsNotManifested.shape[0]}",
            delta = f"-{chargeMassNotManifested} kg"
        )

    with columnSummary3:
        st.metric(
            label = "Orders Delivered",
            value = f"{waybillsDelivered.shape[0]}",
            delta = f"{chargeMassDelivered} kg"
        )

    with columnSummary4:
        st.metric(
            label="Orders NOT Delivered:",
            value=f"{waybillsNotDelivered.shape[0]}",
            delta = f"-{chargeMassNotDelivered} kg"
        )

    st.markdown("###")
    st.markdown("###")

    columnSummary5, columnSummary6, columnSummary7, columnSummary8 = st.columns(4)
   
    with columnSummary5:
        st.metric(
            label="Unattended Delivery Queries:",
            value=f"{df_unattendedDeliveryQueries.shape[0]}"
        )

    with columnSummary6:
        st.metric(
            label="Billing Due:",
            value= f"R {round(billedNo,2)}",
            delta= f"-{chargeMassBillingDue} kg",
        )

    with columnSummary7:
        st.metric(
            label="Billed:",
            value=f"R {round(billedYes,2)}",
            delta= f"{chargeMassBilled} kg",

        )

    with columnSummary8:
        st.metric(
            label="Open IT Request:",
            value= 25
        )






# ***************************************************************************************
# 6.3 OPS KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with ops_dashboard:
    st.subheader("Operations KPI")

    # 6.3.1 Create Dashboard Graph: Waybills Per Courier (Bar Chart)
    waybillsPerCourier = (
        df_selection.groupby(by=["Courier"]).count()[["Waybill Number"]]
    ) 

    fig_waybills_per_courier = px.bar(
        waybillsPerCourier,
        x=waybillsPerCourier.index,
        y="Waybill Number",
        title="<b>Waybills per Courier</b>",
        color_discrete_sequence = ["#0083B8"] * len(waybillsPerCourier),
        template = "plotly_white"
    )

    fig_waybills_per_courier.update_layout(
        plot_bgcolor="rgba(0,0,0,0)",
        xaxis=(dict(showgrid=False))
    )

    st.plotly_chart(fig_waybills_per_courier, use_container_width=True)

    # 6.3.2 Create Dashboard Graph: Charge Mass Per Courier (Bar Chart)
    chargeMassPerCourier = (
        df_selection.groupby(by=["Courier"]).sum()[["Charged Mass KG"]]
    )

    fig_charge_mass_per_courier = px.bar(
        chargeMassPerCourier,
        x=chargeMassPerCourier.index,
        y="Charged Mass KG",
        title="<b>Charge Mass per Courier</b>",
        color_discrete_sequence = ["#0083B8"] * len(chargeMassPerCourier),
        template = "plotly_white"
    )

    fig_charge_mass_per_courier.update_layout(
        plot_bgcolor="rgba(0,0,0,0)",
        xaxis=(dict(showgrid=False))
    )

    st.plotly_chart(fig_charge_mass_per_courier, use_containter_width=True)

    # 6.3.3 Create Dashboard Graph: Delivery Per Destination Type (Pie)
    waybillsByAreaType = df_selection.groupby(['Receiver Area Type'])['Waybill Number'].count()
    # st.write(waybillsByAreaType)
    df_waybillsByAreaType = pd.DataFrame(waybillsByAreaType)
    # st.write(df_waybillsByAreaType)
    df_waybillsByAreaType['Receiver Area Type'] = df_waybillsByAreaType.index
    df_waybillsByAreaType = df_waybillsByAreaType.reset_index(drop=True)
    # st.write(df_waybillsByAreaType)

    fig_pie_waybills_per_area = plotlyGraph.Figure(
        plotlyGraph.Pie(
        labels = df_waybillsByAreaType['Receiver Area Type'],
        values = df_waybillsByAreaType['Waybill Number'],
        hoverinfo = "label+percent+value",
        textinfo = "value+label"
    ))

    st.header("Pie Waybills Per Area Type")
    st.plotly_chart(fig_pie_waybills_per_area)

    # 6.3.1 Create Dashboard Graph: Waybills Per Courier (Bar Chart)
    # dictKrish = {
    #     'NAME' :['Krishan','Naidoo','Optimus','Gundam'],
    #     'RATING' :[12,18,9,12]
    # }
    # dfKrish = pd.DataFrame(data=dictKrish)

    # fig = plotlyGraph.Figure(
    #     plotlyGraph.Bar(
    #     x = dictKrish['NAME'],
    #     y = dictKrish['RATING'],
    # ))
    # st.header("Pie chart")
    # st.plotly_chart(fig)

    # 6.3.4 Create Dashboard Graph: Waybills Per Courier (Pie)
    df_waybillsPerCourier = pd.DataFrame(waybillsPerCourier)
    # st.write(df_waybillsPerCourier)
    df_waybillsPerCourier['Courier'] = df_waybillsPerCourier.index
    df_waybillsPerCourier = df_waybillsPerCourier.reset_index(drop=True)
    # st.write(df_waybillsPerCourier)
    fig_pie_waybills_per_courier = plotlyGraph.Figure(
        plotlyGraph.Pie(
        labels = df_waybillsPerCourier['Courier'],
        values = df_waybillsPerCourier['Waybill Number'],
        hoverinfo = "label+percent+value",
        textinfo = "value+label"
    ))

    st.header("Pie Waybills Per Courier")
    st.plotly_chart(fig_pie_waybills_per_courier)





# ***************************************************************************************
# 6.4 Finance KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with finance_dashboard:
    st.subheader('Financial KPI')

    # 6.4.1 Create Dashboard Graph: Billed Status (Pie)
    fig_billed_vs_notBilled = plotlyGraph.Figure(
        plotlyGraph.Pie(
            labels = ["Billed","Not Billed"],
            values = [billedYes, billedNo],
            hoverinfo = "label+percent+value",
            textinfo = "value+label"
        )
    )
    st.header("Waybills Billed vs Not Billed")
    st.plotly_chart(fig_billed_vs_notBilled)






# ***************************************************************************************
# 6.5 CSD KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with csd_dashboard:
    st.subheader('Customer Service Department KPI')
    st.subheader('CSD Unattended Delivery Queries')
    st.write(df_unattendedDeliveryQueries) 

    # 6.5.1 Create Dashboard Graph: Service Delivery Reason Codes
    sla_reason_codes = (
        df_selection.groupby(by=["SLA Service Failure Code"]).count()[["Waybill Number"]]
    )

    fig_sla_reason_codes = px.bar(
        sla_reason_codes,
        x=sla_reason_codes.index,
        y="Waybill Number",
        title="<b>SLA Reason Codes</b>",
        color_discrete_sequence = ["#0083B8"],
        template = "plotly_white"
    )

    fig_sla_reason_codes.update_layout(
        plot_bgcolor="rgba(0,0,0,0)",
        xaxis=(dict(showgrid=False))
    )

    st.plotly_chart(fig_sla_reason_codes, use_containter_width=True)





# ***************************************************************************************
# 6.6 IT KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with it_dashboard:
    st.subheader('IT KPI')





# ***************************************************************************************
# 6.7 Footer KPI Graphs Metrics Info
# ***************************************************************************************
st.markdown("###")

with footer:
    st.subheader("Details of Filtered Waybills")
    st.dataframe(df_selection)
    st.markdown("####")
    st.text('powered by Krishan Naidoo')


# *********************************************************************************************************************
# KPI Dashboard for Operations, Finance, CSD and IT Manager developed by Krishan.Naidoo@nucleussc.co.za (12 June 2022)
# *********************************************************************************************************************
