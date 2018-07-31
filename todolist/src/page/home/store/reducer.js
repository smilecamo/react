// import * as actionType from './actionType'
import {
  fromJS
} from 'immutable'
const defaultState = fromJS({
  topList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 2,
    title: '人文社科',
    imgUrl: '//upload.jianshu.io/collections/images/494271/51164a1egd7b1a4a7c491_690.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 3,
    title: '@IT·互联网',
    imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 4,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 5,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 6,
    title: '历史',
    imgUrl: '//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
    id: 7,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
]
  ,
  articleList: [
    {
      id: 1,
      title: '苦难从未走远（三）',
      desc: `过去儿女很多的时候，感觉苦，不容易。孩子们受不到很好的教育，甚至温饱都有些难解决。大人们更是劳苦一生，最后富足起来了却又无福享受了，想吃吃不多...`,
      picUrl: '//upload-images.jianshu.io/upload_images/10567480-40fcce45566999f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 2,
      title: '怎样的家庭，容易得抑郁症？',
      desc: `昨天，给一位来访的朋友倒茶水，没注意地上的垃圾桶，一个趔趄，水“哗啦啦”撒了一地。 被罚站的“小学生” 我瞬间头晕目眩，心惊肉跳，潜意识地想要即...`,
      picUrl: '//upload-images.jianshu.io/upload_images/10569203-44410f1576f07876.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 3,
      title: '从抑郁症妈妈到斜杠收入破10W+，她用绘画赢得了漂亮的转身',
      desc: `我是文清，一个90后新手妈妈，职场中我的身份是一家互联网公司的运营经理，同时我还有个很酷的身份，是位标准的斜杠青年。在工作8小时以外的时间，我是...`,
      picUrl: '//upload-images.jianshu.io/upload_images/2966292-04f3dc2e49dd09de.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
  ],
})

export default (state = defaultState, action) => {
      return state;
}