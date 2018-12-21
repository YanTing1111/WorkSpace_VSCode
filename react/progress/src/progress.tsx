import * as PropTypes from "prop-types";
import * as React from "react";
import "./progress.css";

// 接口定义一个类一定要定义的属性或方法
export interface IProgressProps {
    color?: string;
    prefixCls?: string;
    showInfo?: boolean;
    step?: number;
    total?: number;
}

const percentDeal = (step: number | undefined, 
    total: number | undefined) : number => {
        if(!step || !total) {
            return 0;
        }

        return (step / total) * 100;
    }

const parseIntPercent = (text: number) : string => `${Math.ceil(text)}%`;

const validProgress = (progress: number | undefined) => {
    if (!progress || progress < 0) {
        return 0;
    } else if (progress > 100) {
        return 100;
    }
    return progress;
}

class ProgressBar extends React.Component<IProgressProps> {
    // 如果外界不传的话，就使用默认值，类的static
    public static defaultProps = {
        color: "#FFE103",
        prefixCls: "tiger-progress",
        showInfo: false,
        step: 2,
        total: 10
    }

    public static propTypes = {
        color: PropTypes.string,
        showInfo: PropTypes.bool,
        step: PropTypes.number,
        total: PropTypes.number
    }

    public render() {
        const { prefixCls, step, total, showInfo, color, ...resetProps} = this.props;
        let progress;
        let text;
        let percent;
        let progressInfo;
        percent = percentDeal(step, total);
        text = parseIntPercent(validProgress(percent));
        if (showInfo) {
            progressInfo = (
                <div className={`${prefixCls}-show-info`}>
                    <span className={`${prefixCls}-text`}>
                        {text}
                    </span>
                </div>
            )
        }
        const fixOuterStyle = {
            marginTop: "30px"
        }
        const percentStyle = {
            background: color,
            borderRedius: "100px",
            height: "12px",
            width: text
        }
        progress = (
            <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
                <div className={`${prefixCls}-inner`}>
                    <div className={`${prefixCls}-bg`} style={percentStyle}>
                        {progressInfo || null}
                    </div>
                </div>
            </div>
        );
        return (
            <div {...resetProps} className="tiger-progress">
                { progress }
            </div>
        )
    }
}

export default ProgressBar;