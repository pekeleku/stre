import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-message"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-transaction";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="ic-menu" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a href={href} className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          <Link href={href} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}
