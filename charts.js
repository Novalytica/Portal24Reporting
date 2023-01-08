d3.json("table.json", function(data) {

  $("#municipalities").DataTable( {
    data: data,
    columns: [
      // {
      //   data: "isin",
      //   title: "isIn",
      //   width: "10%",
      // },
      {
        data: "sub_key",
        title: "Sub Key",
        width: "20%",
      },
      {
        data: "price",
        title: "Price",
        width: "20%"
      },
      {
        data: "price_date",
        title: "Price Date",
        width: "20%"
      },
      // {
      //   data: "last_report_available",
      //   title: "Last Report",
      //   width: "10%"
      // },
      // {
      //   data: "nav",
      //   title: "Nav",
      //   width: "5%"
      // },
      {
        data: "adj_nav",
        title: "Adj Nav",
        width: "20%"
      },
      // {
      //   data: "agio",
      //   title: "Agio",
      //   width: "5%"
      // },
      {
        data: "adj_agio",
        title: "Adj Agio",
        width: "20%"
      },
      // {
      //   data: "premium_discount",
      //   title: "Premium Discount",
      //   width: "5%"
      // },
      // {
      //   data: "perf_date",
      //   title: "Perf Date",
      //   width: "10%"
      // },
      // {
      //   data: "perf_ytd",
      //   title: "Perf Ytd",
      //   width: "10%"
      // },
      // {
      //   data: "perf_3y",
      //   title: "Perf 3y",
      //   width: "10%"
      // },
      // {
      //   data: "perf_5y",
      //   title: "Perf 5y",
      //   width: "10%"
      // },
      // {
      //   data: "dividend_date",
      //   title: "Divided Date",
      //   width: "10%"
      // },
      // {
      //   data: "dividend_amount",
      //   title: "Dividend Amount",
      //   width: "10%"
      // },
      // {
      //   data: "dividend_yield",
      //   title: "Dividend Yield",
      //   width: "10%"
      // },
      // {
      //   data: "number_shares",
      //   title: "Number Shares",
      //   width: "5%"
      // },
      // {
      //   data: "date_kpis",
      //   title: "Date KPIs",
      //   width: "5%"
      // },
      // {
      //   data: "debt_ratio",
      //   title: "Debt Ratio",
      //   width: "5%"
      // },
      // {
      //   data: "ter_gav",
      //   title: "Ter Gav",
      //   width: "5%"
      // },
      // {
      //   data: "payout_ratio",
      //   title: "Payout Ratio",
      //   width: "5%"
      // },
      // {
      //   data: "discount_ratio",
      //   title: "Discount Ratio",
      //   width: "5%"
      // },
      // {
      //   data: "type_discountrate",
      //   title: "Type Discountrate",
      //   width: "5%"
      // },
      // {
      //   data: "avg_volume_30d_chf",
      //   title: "avg volume 30d chf",
      //   width: "10%"
      // },
      // {
      //   data: "nav_with_deferred_tax",
      //   title: "nav with deferred tax",
      //   width: "10%"
      // },
      // {
      //   data: "agio_with_deferred_tax",
      //   title: "agio_with_deferred_tax",
      //   width: "10%"
      // },
    ],
    // "order": [[ 2, "desc" ]],
    "pageLength": 40
  });
});



