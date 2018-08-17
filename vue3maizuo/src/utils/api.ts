/**
 * ******************************************************************
 * 在大型项目里，建议对网络层再进行一层封装，也就是下面11行到32行的代码，因为大型
 * 项目里，需要对异常信息做统一管理，请求参数加密，统一权限认证。
 * 以下是为了方便大家查看代码，所以把该层和业务api合并到一起了。
 * ******************************************************************
 */
import axios, { AxiosPromise, AxiosInstance } from 'axios';

class Api {
  private http: AxiosInstance;
  private baseUrl = '/v4/api/';
  constructor() {
    /**
     * 创建axios实例，配置基本参数
     */
    this.http = axios.create({
      baseURL: this.baseUrl,
      timeout: 5000,
      params: {
        __t: Date.now(), // 对所有请求自动加入时间戳参数
      },
    });

    /**
     * 对返回数据做统一处理
     */
    this.http.interceptors.response.use(
      (response) => {
        if (response.status === 200 && response.data.status === 0) {
          // 如果服务端返回正常，直接返回业务数据
          return response.data;
        } else {
          // 如果服务端异常，直接返回异常信息
          return Promise.reject(response.data || '服务器异常');
        }
      },
      () => {
        return Promise.reject('网络异常');
      },
    );
  }

  /**
   * 获取正在热映电影接口
   * @param page 页码
   * @param count 条数
   */
  public getNowPlaying = (page: number, count: number) => {
    return this.http.get('/film/now-playing', { params: { page, count } });
  }

  /**
   * 获取即将上映电影接口
   * @param page 页码
   * @param count 条数
   */
  public getComingSoon = (page: number, count: number) => {
    return this.http.get('/film/coming-soon', { params: { page, count } });
  }

  /**
   * 获取电影详情
   * @param id 电影id
   */
  public getFilmDetail = (id: number) => {
    return this.http.get(`/film/${id}`);
  }

  /**
   * 获取影院信息
   */
  public getCinema = () => {
    return this.http.get('/cinema');
  }

  /**
   * 获取首页轮播图
   */
  public getHomeBanner = () => {
    return this.http.get('/billboard/home');
  }
}
export default new Api();
