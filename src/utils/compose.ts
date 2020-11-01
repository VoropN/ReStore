export const compose = (...funcs: any) => (params: any) =>
  funcs.reduceRight((args: any, func: any) => func(args), params);
