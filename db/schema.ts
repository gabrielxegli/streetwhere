import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `streetwhere_${name}`);

export const mails = pgTable("mails", {
  id: serial("id").primaryKey(),
  to: varchar("to", { length: 64 }).notNull().unique(),
  subject: varchar("subject").notNull(),
  plain: text("plain"),
  html: text("html"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const mailsRelations = relations(mails, ({ one }) => ({
  shop: one(shops, {
    fields: [mails.to],
    references: [shops.to],
  }),
}));

export const shops = pgTable("shops", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
  url: varchar("url", { length: 64 }).notNull().unique(),
  to: varchar("to", { length: 64 }).unique(),
});

export const shopsRelations = relations(shops, ({ many }) => ({
  mails: many(mails),
}));
