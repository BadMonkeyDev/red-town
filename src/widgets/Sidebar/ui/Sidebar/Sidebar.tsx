import {useState} from "react";
import cn from '@/shared/lib/classNames';
import {Button} from "@/shared/ui/Button";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";
import {LangSwitcher} from "@/shared/ui/LangSwitcher";
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const {
    className,
  } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState);
  }

  return (
    <div className={cn(styles.root, {[styles.collapsed]: collapsed}, className)}>
      <Button
        style={{border: '1px solid teal', padding: '5px 10px', color: 'teal', borderRadius: '4px'}}
        onClick={onToggle}
      >
        toggle sidebar
      </Button>
      <div style={{marginTop: '20px'}}>
        content
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={styles.lang}/>
      </div>
    </div>
  )
}