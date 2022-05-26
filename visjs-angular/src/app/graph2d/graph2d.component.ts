import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis-data';
import { Graph2d, RightLeftEnumType, LegendPositionType } from 'vis-timeline';
@Component({
  selector: 'app-graph2d',
  templateUrl: './graph2d.component.html',
  styleUrls: ['./graph2d.component.css']
})
export class Graph2dComponent implements OnInit {
  graph: Graph2d;
  options: {};
  groups: any;
  yAxisOrientationRight: RightLeftEnumType = 'right';
  legendRight: LegendPositionType = 'top-left';
  constructor() { }


  ngOnInit(): void {
    this.graphStatistics();
  }

  graphStatistics() {
    const container = document.getElementById('visualization');
    const options = {
    //   legend: { right: { position: this.legendRight } },
    //  yAxisOrientation: this.yAxisOrientationRight,
    //   dataAxis: { icons: true }, 
      shaded: true,
      defaultGroup: 'Adverse Event ',
    };
    const items = new DataSet(
      [
      { "id": 0, start: "2014-09-06T00:00:00.000Z", x: "2014-06-13", y: 10, "content": "<p>Product: OVARIAN CANCER </p>", "group": 0, "title": "Sun Sep 05 2021", label: 'Cervical Cancer'  },
      { "id": 1, start: "2014-08-06T00:00:00.000Z",  x: "2014-06-15", y: 20, "content": "<p>Product: OVARIAN CANCER STAGE IV </p>", "group": 0, "title": "Thu Aug 05 2021", label: 'Cervical Cancer'  },
      { "id": 2, start: "2014-08-19T00:00:00.000Z",  x: "2014-06-28", y: 30, "content": "<p>Product: CERVICAL CANCER </p>", "group": 0, "title": "Wed Aug 18 2021", label: 'Cervical Cancer'  },
      { "id": 3, start: "2014-12-10T00:00:00.000Z",  x: "2014-07-13", y: 35, "content": "<p>Product: CERVICAL CANCER </p>", "group": 1, "title": "Wed Dec 09 2020", label: 'Cervical Cancer'  },
      { "id": 4, start: "2014-04-08T00:00:00.000Z",  x: "2014-08-13", y: 40, "content": "<p>Product: CERVICAL CANCER </p>", "group": 1, "title": "Thu Apr 07 2022", label: 'Cervical Cancer'  },
      { "id": 5, start: "2014-09-12T00:00:00.000Z",  x: "2015-09-13", y: 42, "content": "<p>Product: CERVICAL CANCER </p>", "group": 1, "title": "Fri Sep 11 2020", label: 'Cervical Cancer'  },
      { "id": 6, start: "2014-01-10T00:00:00.000Z",  x: "2014-10-13", y: 50, "content": "<p>Product: CERVICAL CANCER </p>", "group": 2, "title": "Thu Jan 09 2020", label: 'Cervical Cancer'  },
      { "id": 7, start: "2014-07-06T00:00:00.000Z",  x: "2014-11-13", y: 53, "content": "<p>Product: CERVICAL CANCER </p>", "group": 2, "title": "Mon Jul 05 2021", label: 'Cervical Cancer'  },
      { "id": 8, start: "2014-10-21T00:00:00.000Z",  x: "2014-12-13", y: 57, "content": "<p>Product: CERVICAL CANCER </p>", "group": 2, "title": "Wed Oct 20 2021", label: 'Cervical Cancer'  },
      { "id": 9, start: "2014-04-06T00:00:00.000Z",  x: "2015-01-05", y: 60, "content": "<p>Product: CERVICAL CANCER </p>", "group": 2, "title": "Tue Apr 05 2022", label: 'Cervical Cancer'  }]
      );
    this.groups = new DataSet([
      {
        id: 0, 
        content: `<div><strong>fdgdfgfdgdfg</strong></div>`,
        options: {
          defaultGroup:'group',
          tooltip: {
            showToolTips: true,
            followMouse: true,
            overflowMethod: "cap",
          },
          showMajorLabels: true,
          drawPoints: {
            style: "circle", // square, circle
            size: 10
          },
          style:"bar",
          shaded: {
            orientation: "top", // top, bottom
          },
        },
      },
    ]);
    const graph2d = new Graph2d(container, items, this.groups, options);
   // graph2d.setWindow(new Date(graph2d['range'].start), new Date(graph2d['range'].end));
  }
}