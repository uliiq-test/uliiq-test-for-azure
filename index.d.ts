import { AxiosInstance, AxiosRequestConfig, AxiosPromise  } from 'axios'
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router'
import { MsalWishHub } from '~/plugins/msalWishHub'

interface NuxtAxiosInstance extends AxiosInstance {
  $request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  $get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  $delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  $head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  $options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  $patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

declare module "*.vue" {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/options' {
  export interface ComponentOptions<V extends Vue> {
    layout?: any
    middleware?: string | string[];
    msalWishHub?: MsalWishHub;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $axios: NuxtAxiosInstance
    $msalWishHub: MsalWishHub
  }
}

declare namespace NodeJS {
  interface Process {
    server: boolean;
    browser: boolean;
  }
}

declare module 'vuex' {
  interface Store<S> {
    $msalWishHub: MsalWishHub
  }
}