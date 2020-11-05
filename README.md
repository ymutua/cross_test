# Test: map geolocated IP addresses using Crosstalk

## The tool

The tool is available here: https://matt-dray.github.io/ip-geolocate-map-crosstalk/

## Background

This repo contains a test of [`crosstalk`](https://rstudio.github.io/crosstalk/) for inter-widget interactivty between a [`leaflet`](https://rstudio.github.io/leaflet/) map, [`datatable`](https://rstudio.github.io/DT/) interactive table and filters in a [`flexdashboard`](https://rmarkdown.rstudio.com/flexdashboard/) layout.

> Crosstalk is an add-on to the [htmlwidgets](http://www.htmlwidgets.org/) package. It extends htmlwidgets with a set of classes, functions, and conventions for implementing cross-widget interactions (currently, linked brushing and filtering).

Selections in one htmlwidget will update the other htmlwidget. This behaviour allows for creation of simple tools that can be shared as HTML without the need for [Shiny](https://shiny.rstudio.com/) and a hosting service.

## Data

The [IP address](https://en.wikipedia.org/wiki/IP_address) data are fake and were generated using the [generator](https://github.com/paulhendricks/generator) package, then geolocated using the [freegeoip](https://github.com/luiscape/freegeoip) package. 'Groups' and 'Devices' were assigned arbitarilty and randomly.
