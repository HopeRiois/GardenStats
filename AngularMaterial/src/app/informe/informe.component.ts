import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {     this.chartOptions = {
    series: [
      {
        name: "Tomate",
        data: [28, 26, 30, 27, 27, 30, 28, 24]
      },
      {
        name: "Pepino",
        data: [28, 27, 29, 26 , 25, 29, 26, 25]
      },
      {
        name: "Jazmin",
        data: [26, 31, 28, 28, 26, 30, 27, 24]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "06/10/2021 6AM",
        "06/10/2021 12PM",
        "06/10/2021 6PM",
        "06/10/2021 12AM",
        "07/10/2021 6AM",
        "07/10/2021 12PM",
        "07/10/2021 6PM",
        "07/10/2021 12PM"
      ]
    },
    yaxis: {
      title: {
        text: "Grados Centigrados"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return  val + " °C";
        }
      }
    },
    title: {
      text: "Temperatura registrada",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444"
      }
    }
  }; }

  ngOnInit(): void {
  }

  temperatura(){
    this.chartOptions = {
      series: [
        {
          name: "Tomate",
          data: [28, 26, 30, 27, 27, 30, 28, 24]
        },
        {
          name: "Pepino",
          data: [28, 27, 29, 26 , 25, 29, 26, 25]
        },
        {
          name: "Jazmin",
          data: [26, 31, 28, 28, 26, 30, 27, 24]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "06/10/2021 6AM",
          "06/10/2021 12PM",
          "06/10/2021 6PM",
          "06/10/2021 12AM",
          "07/10/2021 6AM",
          "07/10/2021 12PM",
          "07/10/2021 6PM",
          "07/10/2021 12PM"
        ]
      },
      yaxis: {
        title: {
          text: "Grados Centigrados"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return  val + " °C";
          }
        }
      },
      title: {
        text: "Temperatura registrada",
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  humedad(){ this.chartOptions = {
    series: [
      {
        name: "Tomate",
        data: [68, 75, 78, 73, 70, 72, 75, 70]
      },
      {
        name: "Pepino",
        data: [70, 73, 79, 73 , 69, 79, 73, 72]
      },
      {
        name: "Jazmin",
        data: [65, 80, 81, 72, 67, 81, 78, 69]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "06/10/2021 6AM",
        "06/10/2021 12PM",
        "06/10/2021 6PM",
        "06/10/2021 12AM",
        "07/10/2021 6AM",
        "07/10/2021 12PM",
        "07/10/2021 6PM",
        "07/10/2021 12PM"
      ]
    },
    yaxis: {
      title: {
        text: "Porcentaje humedad"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return  val + " %";
        }
      }
    },
    title: {
      text: "Humedad ambiental registrada",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444"
      }
    }
  };

  }

  humedad_suelo(){
    this.chartOptions = {
      series: [
        {
          name: "Tomate",
          data: [130, 678, 432, 701, 340, 932, 520, 231]
        },
        {
          name: "Pepino",
          data: [150, 660, 321, 780, 223, 884, 472, 150]
        },
        {
          name: "Jazmin",
          data: [121, 711, 492, 912 , 377, 966, 580, 301]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "06/10/2021 6AM",
          "06/10/2021 12PM",
          "06/10/2021 6PM",
          "06/10/2021 12AM",
          "07/10/2021 6AM",
          "07/10/2021 12PM",
          "07/10/2021 6PM",
          "07/10/2021 12PM"
        ]
      },
      yaxis: {
        title: {
          text: "Cantidad de humedad del suelo"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return  val + " prom";
          }
        }
      },
      title: {
        text: "Humedad del suelo registrada",
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  luz(){
      this.chartOptions = {
        series: [
          {
            name: "Tomate",
            data: [275, 1122, 641, 52, 310, 1150, 597, 81]
          },
          {
            name: "Pepino",
            data: [271, 1130, 677, 51, 321, 1137, 616, 87]
          },
          {
            name: "Jazmin",
            data: [260, 1085, 631, 53 , 299, 1120, 629, 95]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "06/10/2021 6AM",
            "06/10/2021 12PM",
            "06/10/2021 6PM",
            "06/10/2021 12AM",
            "07/10/2021 6AM",
            "07/10/2021 12PM",
            "07/10/2021 6PM",
            "07/10/2021 12PM"
          ]
        },
        yaxis: {
          title: {
            text: "Intensidad luminica"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return  val + "de intensidad";
            }
          }
        },
        title: {
          text: "Luz registrada",
          floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
  }
}
