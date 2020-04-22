## API Report File for "@vue-composable/axios"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AxiosInstance } from "axios";
import { AxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { PromiseResultFactory } from "vue-composable";
import { Ref } from "@vue/composition-api";

// @public (undocumented)
export function makeAxios(
  client: AxiosInstance,
  throwException?: boolean
): {
  client: AxiosInstance;
  data: Readonly<
    import("@vue/composition-api/dist/reactivity/ref").Ref<Readonly<any>>
  >;
  status: Readonly<
    import("@vue/composition-api/dist/reactivity/ref").Ref<number>
  >;
  statusText: Readonly<
    import("@vue/composition-api/dist/reactivity/ref").Ref<string>
  >;
  cancel: (message?: string | undefined) => void;
  isCancelled: import("@vue/composition-api/dist/reactivity/ref").Ref<boolean>;
  cancelledMessage: import("@vue/composition-api/dist/reactivity/ref").Ref<
    string | null | undefined
  >;
  exec: (
    request: string | AxiosRequestConfig
  ) => Promise<AxiosResponse<any> | undefined>;
  promise: import("@vue/reactivity").Ref<
    Promise<AxiosResponse<any>> | undefined
  >;
  result: import("@vue/reactivity").Ref<AxiosResponse<any> | null>;
  loading: import("@vue/reactivity").Ref<boolean>;
  error: import("@vue/reactivity").Ref<any>;
};

// Warning: (ae-forgotten-export) The symbol "AxiosReturn" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function useAxios<TData = any>(
  throwException?: boolean
): AxiosReturn<TData>;

// @public (undocumented)
export function useAxios<TData = any>(
  url: string,
  config?: AxiosRequestConfig,
  throwException?: boolean
): AxiosReturn<TData>;

// @public (undocumented)
export function useAxios<TData = any>(
  url: string,
  throwException?: boolean
): AxiosReturn<TData>;

// @public (undocumented)
export function useAxios<TData = any>(
  config?: AxiosRequestConfig,
  throwException?: boolean
): AxiosReturn<TData>;

// (No @packageDocumentation comment for this package)
```