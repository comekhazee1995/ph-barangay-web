import { Activity, FileText, Home as HomeIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { RecentActivity } from "@/components/recent-activity";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.borderBottom}>
          <div className={styles.header}>
            <MainNav className={styles.mainNav} />
            <div className={styles.headerRight}>
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.topRow}>
            <h2 className={styles.dashboardTitle}>Dashboard</h2>
            <div className={styles.buttonGroup}>
              <Button>Download Report</Button>
            </div>
          </div>
          <div className={styles.statsGrid}>
            <Card>
              <CardHeader className={styles.cardHeader}>
                <CardTitle className={styles.cardTitle}>Total Residents</CardTitle>
                <Users className={styles.cardIcon} />
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent}>5,231</div>
                <p className={styles.cardSub}>+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className={styles.cardHeader}>
                <CardTitle className={styles.cardTitle}>Active Projects</CardTitle>
                <Activity className={styles.cardIcon} />
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent}>12</div>
                <p className={styles.cardSub}>3 completed this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className={styles.cardHeader}>
                <CardTitle className={styles.cardTitle}>Announcements</CardTitle>
                <FileText className={styles.cardIcon} />
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent}>8</div>
                <p className={styles.cardSub}>2 new this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className={styles.cardHeader}>
                <CardTitle className={styles.cardTitle}>Households</CardTitle>
                <HomeIcon className={styles.cardIcon} />
              </CardHeader>
              <CardContent>
                <div className={styles.cardContent}>1,429</div>
                <p className={styles.cardSub}>+7 new registrations</p>
              </CardContent>
            </Card>
          </div>
          <div className={styles.overviewGrid}>
            <Card className={styles.colSpan4}>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className={styles.pl2}>
                <Overview />
              </CardContent>
            </Card>
            <Card className={styles.colSpan3}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates in the barangay</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
