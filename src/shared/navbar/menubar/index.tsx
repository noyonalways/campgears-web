import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function MainMenubar() {
  return (
    <Menubar className="shadow-none border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"/"}>Home</Link>
        </MenubarTrigger>
      </MenubarMenu>

      {/* Products Menu */}
      <MenubarMenu>
        <MenubarTrigger>Shop</MenubarTrigger>
        <MenubarContent>
          <Link href={`/shop/products`}>
            <MenubarItem>
              All Products <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
          </Link>
          <MenubarItem>
            New Arrivals <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Best Sellers <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Camping Tents <MenubarShortcut>⌘1</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Sleeping Bags <MenubarShortcut>⌘2</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Camping Stoves <MenubarShortcut>⌘3</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Hiking Boots <MenubarShortcut>⌘4</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>More Categories</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Trekking Poles</MenubarItem>
              <MenubarItem>Backpacks</MenubarItem>
              <MenubarItem>Outdoor Clothing</MenubarItem>
              <MenubarItem>Camping Chairs</MenubarItem>
              <MenubarItem>Camping Lanterns</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Sale</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Orders Menu */}
      <MenubarMenu>
        <MenubarTrigger>Orders</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Track Order <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <Link href={`/user/orders`}>
            <MenubarItem>
              Order History <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
          </Link>
          <MenubarSeparator />
          <MenubarItem>Cancel Order</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Customer Support Menu */}
      <MenubarMenu>
        <MenubarTrigger>Customer Support</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            FAQs <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Contact Us <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Shipping & Returns</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Shipping Policy</MenubarItem>
              <MenubarItem>Returns & Exchanges</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      {/* Account Menu */}
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <Link href={`/user/orders`}>
            <MenubarItem>Order History</MenubarItem>
          </Link>
          <Link href={`/user/wishlist`}>
            <MenubarItem>Wishlist</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
