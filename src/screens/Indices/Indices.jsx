import React from "react";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import { Header } from "../../components/Header/Header";

var data = require("../../assets/data/indices.json");
var ipodata = require("../../assets/data/ipos.json");

export function Indices() {
  console.log(data);
  return (
    <div>
      <Header />
      <Card className="mt-4 shadow-lg">
        <Title className="mx-4">List of Major Global Indices</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Open</TableHeaderCell>
              <TableHeaderCell>High</TableHeaderCell>
              <TableHeaderCell>Low</TableHeaderCell>
              <TableHeaderCell>Percent Change</TableHeaderCell>
              <TableHeaderCell>Change</TableHeaderCell>
              <TableHeaderCell>Time</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.indices.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.open}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.high}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.low}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg mx-3"
                    style={{
                      backgroundColor:
                        item.percentChange < 0
                          ? "rgba(255, 0, 0, 0.2)"
                          : "rgba(0, 255, 0, 0.2)",
                    }}
                  >
                    <Text>{item.percentChange} %</Text>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg mx-3"
                    style={{
                      backgroundColor:
                        item.percentChange < 0
                          ? "rgba(255, 0, 0, 0.2)"
                          : "rgba(0, 255, 0, 0.2)",
                    }}
                  >
                    <Text>{item.change}</Text>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Text>{item.time}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card className="mt-4 shadow-lg w-1/2">
        <Title className="mx-4">List of Latest IPOs and GMP</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>IPO Name</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>GMP</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Gain</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ipodata.IPOs.map((item) => (
              <TableRow key={item.Name}>
                <TableCell>{item.Name}</TableCell>
                <TableCell>
                  <Text>{item.Date}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.IPOGMP}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.IPOPrice}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    className="py-1 px-2 rounded-lg"
                    style={{
                      backgroundColor:
                        item.percentChange < 0
                          ? "rgba(255, 0, 0, 0.2)"
                          : "rgba(0, 255, 0, 0.2)",
                    }}
                  >
                    <Text>{item.Gain}</Text>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}