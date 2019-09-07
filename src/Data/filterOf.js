import axios from "axios";
import {
  payoutType,
  countriesList,
  smartGroupApi,
  CategoriesApi,
  currencyAPI,
  timeZone,
  searchOptionAPI,
  StatusAPI,
  deviceList,
  platforms,
  MobileCarriers
} from "./urlConfig"; //import URLs
import { requestsData } from "../utils/api";

//filters for payout List
export const filterPayOut = inputValue => {
  let data = [];
  let filterData = [];
  let finalResult = [];

  return requestsData(payoutType).then(res => {
    data = res;

    filterData = data.filter(i =>
      i.id.toLowerCase().includes(inputValue.toLowerCase())
    );

    finalResult = filterData.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return finalResult;
  });
};

//filters for Countries List
export const filterCountries = inputValue => {
  let data = [];
  let filterData = [];
  let finalResult = [];

  return requestsData(countriesList).then(res => {
    data = res;

    filterData = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    finalResult = filterData.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return finalResult;
  });
};

//filters for Smart Group list
export const filterSmartGroups = inputValue => {
  let data = [];
  let filterData = [];
  let finalResult = [];

  return requestsData(smartGroupApi).then(res => {
    data = res;

    filterData = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    finalResult = filterData.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return finalResult;
  });
};

//filters for Category list
export const filterCategories = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return requestsData(CategoriesApi).then(res => {
    data = res;

    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};

//filters for Currency List
export const filterCurrency = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return requestsData(currencyAPI).then(res => {
    data = res;

    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};

//filters for TimeZone
export const filterTimeZone = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(timeZone).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.text.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.text,
      label: item.text
    }));

    return news;
  });
};

export const filterSearchOption = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(searchOptionAPI).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.Text.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.Text,
      label: item.Text
    }));

    return news;
  });
};

export const filterStatus = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(StatusAPI).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.Text.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.Text,
      label: item.Text
    }));

    return news;
  });
};

export const filterDevices = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(deviceList).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};

export const filterPlatforms = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(platforms).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};

export const filterMobileCarrier = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return axios.get(MobileCarriers).then(res => {
    data = res.data;

    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};

export default {
  filterPayOut,
  countriesList,
  filterSmartGroups,
  filterCategories,
  filterCurrency,
  filterTimeZone,
  filterPlatforms,
  filterDevices,
  filterStatus
};
